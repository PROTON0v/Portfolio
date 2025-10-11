
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { techStack } from '@/configs/hero.config';
import Image from 'next/image';
import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { useScroll, useMotionValueEvent } from "framer-motion";


const Hero = memo(function Hero() {



  const [hidden, setIsHidden] = useState(false);
  const {scrollY} = useScroll();

useMotionValueEvent( scrollY, "change", (latest)=>{

  setIsHidden((prev)=> {
    const shouldHide  = latest > 10;
    return prev !== shouldHide ? shouldHide : prev
  });

})


  // Prevent hydration mismatch




    return (
        <div className="flex items-center  min-h-screen px-4 sm:px-6 lg:px-8  relative ">
             <div className="w-full max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              {/* Main Title */}
              <div className="space-y-3 sm:space-y-4">
                <div className="text-sm sm:text-base opacity-60 tracking-wide">— Hello</div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                  it&apos;s <span className="font-light">Amine.HM</span>
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-4 sm:space-y-6">
              <p className={`text-lg sm:text-xl leading-relaxed max-w-md mx-auto lg:mx-0 text-muted-foreground`}>
                  I make FullStack web Applications with Next.js
                </p>
                
                {/* Additional Info */}
                <div className="space-y-3 sm:space-y-4">
                <div className={`flex items-center justify-center lg:justify-start gap-3 sm:gap-4 text-sm 
                  text-muted-foreground`}>
                  
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available for freelance projects
                  </div>
                  
                  <div className={`text-sm text-center lg:text-left  text-muted-foreground`}>
                    <span className="opacity-60">Based in</span> Algeria • <span className="opacity-60">Experience</span> 2+ years
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3 sm:space-y-4">
                
              <div className={`text-xs sm:text-sm uppercase tracking-wider text-center lg:text-left
                  text-muted-foreground`}>Expertise</div>

                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                  {techStack.map((skill) => (
                    <span 
                      key={skill} 
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm              
                           bg-secondary text-secondary-foreground hover:bg-accent border border-border`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-2 sm:pt-4 justify-center lg:justify-start">
               <a href="#projects-section">
                 <button 
                className={`cursor-pointer group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full  text-sm sm:text-base 
                     bg-primary text-primary-foreground hover:bg-primary/90 `}>
                  <span>View My Work</span>
                  <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 " />
                </button>
                </a>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <a href="#" className={`p-2 rounded-full 
            hover:bg-accent`}>
                    <Github size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a href="#" className={`p-2 rounded-full
                    hover:bg-accent`}>
                    <Linkedin size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a href="#" className={`p-2 rounded-full 
                   hover:bg-accent`}>
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center lg:justify-end order-first lg:order-last"
            >
              <div className="relative">
                <div className="relative  overflow-hidden   w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">

                <Image 
                src="/trbgpfp.png" 
                alt="Hero"
                width={900} 
                height={900}
                priority
                 /> 
                 
                </div>
               
              </div>
            </motion.div>
          </div>
             </div>
                  {/* Scroll Indicator */}
                  <div 

                  className={` absolute bottom-4 sm:bottom-8 left-4 md:-left-26 lg:left-6 xl:-left-36 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm  text-muted-foreground
      ${hidden ? 'opacity-0' : 'opacity-100'}
      `}>
        <span className="hidden sm:block">Scroll Down</span>
        <ChevronDown size={14} className="sm:w-4 sm:h-4 animate-bounce" />
      </div>

    
   
        </div>
    )
});

export default Hero;
