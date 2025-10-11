'use client';

import { Star } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef, useMemo, memo } from "react";

import { testimonials } from '@/configs/testimonials.config';



export default memo(function Testimonials({speed = 18}: {speed: number}) {


   
    // const [mounted, setMounted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [ inView, setInView ] = useState(false);

    const controls = useAnimation();

    const duplicatedTestimonials = useMemo(
      ()=> [...testimonials, ...testimonials],
      []
    );
    
    

  // tracck when the testimonials section is in view 

useEffect(() => {
  let isActive = true;

  const observer = new IntersectionObserver(([entry]) => {
    if (isActive) {
      setInView(entry.isIntersecting);
    }
  }, { threshold: 0.3 });

  const container = ref.current;
  
  if (container) {
    observer.observe(container);
  }
  
  // Cleanup function to prevent state updates after component unmounts
  return () => {
    isActive = false;
    observer.disconnect();
  };
}, []); 

    // Start / pause animation based on visibility. 
    useEffect(() => {
      if (inView) {
        controls.start({
          x: ["0%", "-50%"],
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: speed,
          },
        });
      } else {
        controls.set({x:"0%"})
        controls.stop();
      }
    }, [inView, speed, controls]);



 

  return (
    <section ref={ref}  className={` py-20 sm:py-24 lg:py-12 px-4 sm:px-6 lg:px-8  relative overflow-hidden 
      text-foreground`}>

      <div className="w-7xl mx-auto ">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className={` text-sm sm:text-base opacity-60 tracking-wide mb-4  text-muted-foreground `}>
            — Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            What People <span className="font-light">Say About Me</span>
          </h2>
          <p className={`text-[15px] sm:text-xl max-w-sm sm:max-w-3xl mx-auto leading-relaxed text-muted-foreground break-words`}>
            Trusted by clients and colleagues who value quality, innovation, and results.
          </p>
        </motion.div>


        {/* Testimonials Scroll Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className=" relative overflow-hidden"
        >
          {/* Fade Gradients */}
          <div className={`absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none  bg-gradient-to-r from-background via-background/80 to-transparent `}></div>
          <div className={`absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none bg-gradient-to-l from-background via-background/80 to-transparent `}></div>
        {/* Scrollable Container */}
        <motion.div 
            animate={controls}
            className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide pb-4 px-16 sm:px-24 lg:px-32 w-max "
            style={{
              WebkitOverflowScrolling: 'touch',
              willChange: inView ? 'transform' : 'auto'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-none w-80 sm:w-96"
              >
                {/* Glassmorphism Card */}
                <div className={`group relative h-full p-6 sm:p-8 rounded-3xl  backdrop-blur-xl border 'bg-white/40 border-white/20 hover:bg- hover:border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_22px_rgba(0,0,0,0.15)] `}>
                  {/* Subtle Inner Glow */}
                  <div className={`absolute inset-0 rounded-3xl  opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/30 via-transparent to-white/10 `}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Avatar and Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-md"></div>
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/20">
                          <Image
                            width={500}
                            height={500}
                            src="/pfp.jpg"
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg mb-1 ">
                          {testimonial.name}
                        </h3>
                        <p className={`text-sm  text-muted-foreground`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="flex-1 mb-6">
                      <blockquote className={`text-base sm:text-lg leading-relaxed  text-foreground `}>
                        {testimonial.quote}
                      </blockquote>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={16} 
                          className={`transition-colors duration-300 ${
                            starIndex < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400': ' text-foreground'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

     

      {/* Hide scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
});
