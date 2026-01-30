import Image from "next/image";
import { motion } from "framer-motion";
import { memo } from "react";
import { technologies } from "@/configs/aboutIcons.config";

const repeatTechnologies = [...technologies, ...technologies];
const repeatTechnologiesRev = [...technologies, ...technologies].reverse();
const About = memo(function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      id="about-section"
      className="min-h-screen pb-5 md:pb-20 pt-20 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto">
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
            <div
              className={` text-sm sm:text-base opacity-60 tracking-wide mb-4  text-muted-foreground `}
            >
              — About Me
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl mb-6">
              Building Digital <span className="font-light">Experiences</span>
            </h2>

            <p
              className={`w-80 sm:w-auto text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed  text-muted-foreground `}
            >
              I craft modern, responsive web applications focused on
              performance, scalability, and clean design.
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
            <div className="flex justify-around ">
              <div className="relative self-center  ">
                <div
                  className={`relative  rounded-2xl  bg-card border border-border backdrop-blur-sm`}
                >
                  <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-xl overflow-hidden">
                    <Image
                      width={400}
                      height={400}
                      src="/me.jpg"
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
              className={`h-60 w-px hidden lg:block  absolute -bottom-[1000px] bg-gradient-to-b from-transparent via-border to-transparent
  }`}
            />

            {/* About Content */}
            <div className=" space-y-6 sm:space-y-8 mx-auto">
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6">My Journey</h3>
              <div className="space-y-4 sm:space-y-6 w-80 sm:w-auto">
                <p className={`leading-relaxed  text-muted-foreground`}>
                  I started coding out of curiosity — wanting to understand how
                  digital products work. That curiosity turned into a passion
                  for building sleek, fast, and user-focused applications.
                </p>

                <p
                  className={`leading-relaxed  
    text-muted-foreground `}
                >
                  Now, I specialize in building scalable full-stack web apps
                  with React, Next.js, Node.js, and PostgreSQL. My focus is on
                  performance, clean code, and real-world usability.
                </p>

                <p
                  className={`leading-relaxed 
     text-muted-foreground
      `}
                >
                  Outside of work, I explore emerging tools, contribute to
                  open-source projects, and share what I learn with other
                  developers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider Line */}
        <div
          className={`w-full h-px mb-20 sm:mb-24 lg:mb-32  bg-gradient-to-r from-transparent via-border to-transparent
        `}
        ></div>

        {/* Tech Stack Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div
              className={`text-sm sm:text-base opacity-60 tracking-wide mb-4  text-muted-foreground
            `}
            >
              — Technical Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              My <span className="font-light">Tech Stack</span>
            </h2>
            <p
              className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed  text-muted-foreground`}
            >
              Technologies I use to build modern, scalable web applications.
            </p>
          </motion.div>

          <div className=" overflow-hidden relative flex flex-col ">
            {/* Fade Gradients */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none  bg-gradient-to-r from-background via-background/80 to-transparent `}
            ></div>
            <div
              className={`absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none bg-gradient-to-l from-background via-background/80 to-transparent `}
            ></div>

            <div className="flex brightness-90">
              {/* Technology Grid */}
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ x: 0 }}
                viewport={{ once: true }}
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
                className="flex"
              >
                {repeatTechnologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`group p-4 mr-4 sm:p-6 rounded-2xl bg-transparent  hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className={``}>{tech.icon}</div>
                      <div>
                        <h3 className="text-sm sm:text-base mb-1 text-nowrap">
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
              {/* Technology Grid */}
              <motion.div
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
                className="flex"
              >
                {repeatTechnologies.map((tech, index) => (
                  <div
                    key={index + 2}
                    className={`group  mr-4 p-4 sm:p-6 rounded-2xl bg-transparent  hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className={``}>{tech.icon}</div>
                      <div>
                        <h3 className="text-sm sm:text-base mb-1 text-nowrap">
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex brightness-75">
              {/* Technology Grid reversed*/}
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ x: "-100%" }}
                viewport={{ once: true }}
                animate={{ x: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
                className="flex"
              >
                {repeatTechnologiesRev.map((tech, index) => (
                  <div
                    key={`row-2-${index}`}
                    className={`group p-4 mr-4 sm:p-6 rounded-2xl bg-transparent  hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className={``}>{tech.icon}</div>
                      <div>
                        <h3 className="text-sm sm:text-base mb-1 text-nowrap">
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
              {/* Technology Grid */}
              <motion.div
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
                className="flex"
              >
                {repeatTechnologiesRev.map((tech, index) => (
                  <div
                    key={index}
                    className={`group  mr-4 p-4 sm:p-6 rounded-2xl bg-transparent  hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className={``}>{tech.icon}</div>
                      <div>
                        <h3 className="text-sm sm:text-base mb-1 text-nowrap">
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default About;
