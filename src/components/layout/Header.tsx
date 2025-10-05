"use client"
import { TextAlignJustify } from 'lucide-react';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import Navbar from "./Navbar";
import ThemeSwitch from "../ui/themeSwitch";

export default function Header() {

        const [isOpen, setIsOpen] = useState(false);
        const [scrolled, setScrolled] = useState(false);
        const { scrollY } = useScroll();


        useMotionValueEvent(scrollY, "change",(latest)=> {
            if(latest > 10 ) setScrolled(true);
            else setScrolled(false); 
        })

    return (
        <motion.header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-4 py-4 sm:px-8 sm:py-6 
         ${
        scrolled
          ? "bg-[var(--color-card)] border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      }
        `}>
               <div className="text-xs text-nowrap sm:text-sm opacity-80">
          © Code by Proton
        </div>
            <div className="flex  items-center ">
                <Navbar  
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                />
                <ThemeSwitch />
                <button 
                onClick={()=> setIsOpen(prev => !prev)}
                className='ml-2 block sm:hidden'
                >
                <TextAlignJustify className='h-6 w-6' />
                </button>
            </div>
        </motion.header>
    )
}