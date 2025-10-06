
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { techStack } from '@/configs/hero.config';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";


export default function Hero() {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hidden, setIsHidden] = useState(false);
  const {scrollY} = useScroll()

useMotionValueEvent( scrollY, "change", (latest)=>{

  if(latest > 10) setIsHidden(true);
  else setIsHidden(false);

})


  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 



    return (
        <div className="flex items-center  h-screen px-4 sm:px-6 lg:px-8   ">
             <div className="w-full max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Main Title */}
              <div className="space-y-3 sm:space-y-4">
                <div className="text-sm sm:text-base opacity-60 tracking-wide">— Hello</div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                  it&apos;s <span className="font-light">Amine.HM</span>
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-4 sm:space-y-6">
              <p className={`text-lg sm:text-xl leading-relaxed max-w-md mx-auto lg:mx-0 transition-colors duration-500 ${
                  theme === "dark" ? 'text-gray-300' : 'text-muted-foreground'
                }`}>
                  I make FullStack web Applications with Next.js
                </p>
                
                {/* Additional Info */}
                <div className="space-y-3 sm:space-y-4">
                <div className={`flex items-center justify-center lg:justify-start gap-3 sm:gap-4 text-sm transition-colors duration-500 ${
                    theme === "dark" ? 'text-gray-400' : 'text-muted-foreground'
                  }`}>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available for freelance projects
                  </div>
                  
                  <div className={`text-sm text-center lg:text-left transition-colors duration-500 ${
                    theme === "dark" ? 'text-gray-400' : 'text-muted-foreground'
                  }`}>
                    <span className="opacity-60">Based in</span> Morocco • <span className="opacity-60">Experience</span> 5+ years
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3 sm:space-y-4">
              <div className={`text-xs sm:text-sm uppercase tracking-wider text-center lg:text-left transition-colors duration-500 ${
                  theme === "dark" ? 'text-gray-500' : 'text-muted-foreground'
                }`}>Expertise</div>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                  {techStack.map((skill) => (
                    <span 
                      key={skill} 
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-500 ${
                        theme === "dark" 
                          ? 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10' 
                          : 'bg-secondary text-secondary-foreground hover:bg-accent border border-border'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-2 sm:pt-4 justify-center lg:justify-start">
                <button className={`group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base ${
                  theme === "dark" 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}>
                  <span>View My Work</span>
                  <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <a href="#" className={`p-2 rounded-full transition-colors ${
                    theme === "dark" ? 'hover:bg-white/10' : 'hover:bg-accent'
                  }`}>
                    <Github size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a href="#" className={`p-2 rounded-full transition-colors ${
                    theme === "dark" ? 'hover:bg-white/10' : 'hover:bg-accent'
                  }`}>
                    <Linkedin size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a href="#" className={`p-2 rounded-full transition-colors ${
                    theme === "dark" ? 'hover:bg-white/10' : 'hover:bg-accent'
                  }`}>
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative">
                <div className="relative  overflow-hidden   ">
                <Image 
                src="/bigpfp.jpg" 
                alt="Hero"
                width={900} 
                height={900} />
                </div>
              </div>
            </div>
          </div>
             </div>
                  {/* Scroll Indicator */}
                  <div 

                  className={` absolute bottom-4 sm:bottom-8 left-4 sm:left-8 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm transition-all duration-300 ${
        theme === "dark"  ? 'text-gray-400' : 'text-muted-foreground'
      }
      ${hidden ? 'opacity-0' : 'opacity-100'}
      `}>
        <span className="hidden sm:block">Scroll Down</span>
        <ChevronDown size={14} className="sm:w-4 sm:h-4 animate-bounce" />
      </div>

    
   
        </div>
    )
}
