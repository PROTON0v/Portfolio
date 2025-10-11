'use client';



import { motion } from "framer-motion";



export default function CallToAction() {


 

    return (
         // Call to Action 
         <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6, delay: 0.4 }}
         className="text-center mt-16 sm:mt-20 lg:mt-24"
       >
         <div 
        
         className={`inline-flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-secondary border border-border hover:bg-accent
         `}>
           <span className={`text-sm sm:text-base transition-colors duration-500 text-muted-foreground `}>
             Interested in working together?
           </span>
           <button className={`cursor-pointer px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90 `}>
             Get In Touch
           </button>
         </div>
       </motion.div>
    )
}