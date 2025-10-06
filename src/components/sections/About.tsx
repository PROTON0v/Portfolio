

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { technologies } from '@/configs/aboutIcons.config';
import { useEffect, useState } from 'react';




export default function About() {

    const {theme} = useTheme();
    const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 


  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
    id="about-section" 
    className="h-screen  py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-500  ">
      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          {/* Section Header */}
      
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className={`text-sm sm:text-base opacity-60 tracking-wide mb-4 transition-colors duration-500 ${
              theme === "dark" ? 'text-gray-400' : 'text-muted-foreground'
            }`}>
              — About Me
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              Building Digital <span className="font-light">Experiences</span>
            </h2>
           
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              theme === "dark" ? 'text-gray-300' : 'text-muted-foreground'
            }`}>
             I craft modern, responsive web applications focused on performance, scalability, and clean design.
            </p>
  
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 ">
              {/* Photo Placeholder */}
              <div className="flex justify-around   ">
              <div className="relative self-center  ">
                <div className={`relative  rounded-2xl transition-all duration-500 ${
                  theme === "dark" 
                    ? 'bg-white/5 border border-white/10 backdrop-blur-sm' 
                    : 'bg-card border border-border backdrop-blur-sm'
                }`}>
                  <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-xl overflow-hidden">
                    <Image 
                        width={400}
                        height={400}
                      src='/pfp.jpg' 
                      alt="About Me Portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                 
                </div>
              </div>
              <div
                 className={`h-full w-px hidden lg:block transition-colors duration-500 self-end  ${
    theme === "dark"
      ? "bg-gradient-to-b from-transparent via-white/20 to-transparent"
      : "bg-gradient-to-b from-transparent via-border to-transparent"
  }`}
/>
            </div>

            <div
  className={`h-60 w-px hidden lg:block transition-colors duration-500   absolute -bottom-[1000px] ${
    theme === "dark"
      ? "bg-gradient-to-b from-transparent via-white/20 to-transparent"
      : "bg-gradient-to-b from-transparent via-border to-transparent"
  }`}
/>


            {/* About Content */}
            <div className="space-y-6 sm:space-y-8">
            <div>
  <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">My Journey</h3>
  <div className="space-y-4 sm:space-y-6">
    <p
      className={`leading-relaxed transition-colors duration-500 ${
        theme === "dark" ? "text-gray-300" : "text-muted-foreground"
      }`}
    >
      I started coding out of curiosity — wanting to understand how digital
      products work. That curiosity turned into a passion for building sleek,
      fast, and user-focused applications.
    </p>

    <p
      className={`leading-relaxed transition-colors duration-500 ${
        theme === "dark" ? "text-gray-300" : "text-muted-foreground"
      }`}
    >
      Now, I specialize in building scalable full-stack web apps with React,
      Next.js, Node.js, and PostgreSQL. My focus is on performance, clean code,
      and real-world usability.
    </p>

    <p
      className={`leading-relaxed transition-colors duration-500 ${
        theme === "dark" ? "text-gray-300" : "text-muted-foreground"
      }`}
    >
      Outside of work, I explore emerging tools, contribute to open-source
      projects, and share what I learn with other developers.
    </p>
  </div>
</div>

            </div>

          
          </motion.div>
        </div>

        {/* Divider Line */}
        <div className={`w-full h-px mb-20 sm:mb-24 lg:mb-32 transition-colors duration-500 ${
          theme === "dark" ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' 
                 : 'bg-gradient-to-r from-transparent via-border to-transparent'
        }`}></div>

        {/* Tech Stack Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className={`text-sm sm:text-base opacity-60 tracking-wide mb-4 transition-colors duration-500 ${
              theme === "dark" ? 'text-gray-400' : 'text-muted-foreground'
            }`}>
              — Technical Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              My <span className="font-light">Tech Stack</span>
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              theme === "dark" ? 'text-gray-300' : 'text-muted-foreground'
            }`}>
              Technologies I use to build modern, scalable web applications.
            </p>
          </motion.div>

          {/* Technology Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                className={`group p-4 sm:p-6 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                    theme === "dark" 
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20' 
                    : 'bg-card border border-border hover:bg-accent hover:border-accent-foreground/20'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <motion.div 
                    className={`p-3 rounded-xl transition-all duration-500 group-hover:scale-110 ${
                        theme === "dark" ? 'bg-white/10 group-hover:bg-white/20' : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-sm sm:text-base mb-1 group-hover:scale-105 transition-transform duration-300">
                      {tech.name}
                    </h3>
                    <p className={`text-xs transition-colors duration-500 ${
                      theme === "dark" ? 'text-gray-400' : 'text-muted-foreground'
                    }`}>
                      {tech.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Tech Stack Info */}
          <motion.div 
            className="mt-12 sm:mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
          
          </motion.div>
        </div>

      </div>

      {/* Background Elements */}
      <div className={`absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl transition-opacity duration-500 ${
        theme === "dark" ? 'bg-blue-500/5' : 'bg-blue-500/10'
      }`}></div>
      <div className={`absolute bottom-1/3 left-1/3 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full blur-3xl transition-opacity duration-500 ${
        theme === "dark" ? 'bg-purple-500/5' : 'bg-purple-500/10'
      }`}></div>
    </motion.section>
  );
}