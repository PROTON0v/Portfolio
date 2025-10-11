
import Image from 'next/image';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { technologies } from '@/configs/aboutIcons.config';





const About = memo(function About() {

 
    




  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
    id="about-section" 
    className="min-h-screen  py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8   ">
      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          {/* Section Header */}
      
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className={`text-sm sm:text-base opacity-60 tracking-wide mb-4  text-muted-foreground `}>
              — About Me
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              Building Digital <span className="font-light">Experiences</span>
            </h2>
           
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed  text-muted-foreground`}>
             I craft modern, responsive web applications focused on performance, scalability, and clean design.
            </p>
  
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 "
          >
              {/* Photo Placeholder */}
              <div className="flex justify-around   ">
              <div className="relative self-center  ">
                <div className={`relative  rounded-2xl  bg-card border border-border backdrop-blur-sm`}>

                  <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-xl overflow-hidden">
                    <Image 
                        width={400}
                        height={400}
                      src='/pfp.jpg' 
                      alt="About Me Portrait"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                 
                </div>
              </div>
              <div
                 className={`h-full w-px hidden lg:block  self-end  bg-gradient-to-b from-transparent via-border to-transparent`}
/>
            </div>

            <div
  className={`h-60 w-px hidden lg:block    absolute -bottom-[1000px] bg-gradient-to-b from-transparent via-border to-transparent
  }`}
/>


            {/* About Content */}
            <div className="space-y-6 sm:space-y-8">
            <div>
  <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">My Journey</h3>
  <div className="space-y-4 sm:space-y-6">
    <p
      className={`leading-relaxed  text-muted-foreground`}
    >
      I started coding out of curiosity — wanting to understand how digital
      products work. That curiosity turned into a passion for building sleek,
      fast, and user-focused applications.
    </p>

    <p
      className={`leading-relaxed  
    text-muted-foreground `}
    >
      Now, I specialize in building scalable full-stack web apps with React,
      Next.js, Node.js, and PostgreSQL. My focus is on performance, clean code,
      and real-world usability.
    </p>

    <p
      className={`leading-relaxed 
     text-muted-foreground
      `}
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
        <div className={`w-full h-px mb-20 sm:mb-24 lg:mb-32  bg-gradient-to-r from-transparent via-border to-transparent
        `}></div>

        {/* Tech Stack Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className={`text-sm sm:text-base opacity-60 tracking-wide mb-4  text-muted-foreground
            `}>
              — Technical Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              My <span className="font-light">Tech Stack</span>
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed  text-muted-foreground`}>
              Technologies I use to build modern, scalable web applications.
            </p>
          </motion.div>

          {/* Technology Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
          >
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className={`group p-4 sm:p-6 rounded-2xl bg-card border border-border hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div 
                    className={`p-3 rounded-xl group-hover:scale-110 bg-primary/10 group-hover:bg-primary/20 transition-all duration-200`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base mb-1 ">
                      {tech.name}
                    </h3>
                    <p className={`text-xs text-muted-foreground
                    `}>
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

   
        </div>

      </div>

   
    </motion.section>
  );
});

export default About;