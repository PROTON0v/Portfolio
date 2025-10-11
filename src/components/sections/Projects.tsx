import { ExternalLink, Github,  ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/configs/projects.config';
import { memo } from 'react';
import { motion } from 'framer-motion';

  


const Projects = memo(function Projects() {

  

 
  return (
    <section id="projects-section" className={`min-h-screen py-10 sm:py-24 lg:py-12 px-4 sm:px-6 lg:px-8  text-foreground`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
        <div className={`text-sm sm:text-base opacity-60 tracking-wide mb-4 text-muted-foreground`}>
          — Selected Work
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
          Featured <span className="font-light">Projects</span>
        </h2>
        <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed  text-muted-foreground`}>
          A showcase of recent projects that demonstrate my expertise in full-stack development, 
          user experience design, and modern web technologies.
        </p>
        </motion.div>

        {/* Projects with Timeline */}
        <div className="relative mb-20 sm:mb-24 lg:mb-32">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block">
            <div className={`w-full h-full bg-gradient-to-b from-border via-muted-foreground/20 to-border`}></div>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full border-2  bg-transparent border-foreground/60 hover:border-foreground/80 transition-colors duration-200`}></div>
                </div>

                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform scale-105 opacity-0 group-hover:opacity-100 "></div>
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    width={400}
                    height={400}
                    src='/pfp.jpg'
                    alt={project.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={index < 2}
                  />
                  <div className={`absolute inset-0  bg-gradient-to-t from-black/40 via-transparent to-transparent`}></div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs  bg-secondary text-secondary-foreground `}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>
                  
                  <p className={`text-base sm:text-lg leading-relaxed  text-muted-foreground `}>
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm  bg-accent text-accent-foreground hover:bg-accent/80 border border-border
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <button className={`group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full  text-sm sm:text-base 
                     bg-primary text-primary-foreground hover:bg-primary/90
                  `}>
                    <span>View Project</span>
                    <ArrowUpRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  
                  <button className={`p-3 rounded-full   hover:bg-accent
                  `}>
                    <Github size={18} />
                  </button>
                  
                  <button className={`p-3 rounded-full  hover:bg-accent
                  `}>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>



       
      </div>
    </section>
  );
});

export default Projects;