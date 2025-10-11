

import { ArrowUpIcon } from "lucide-react"
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {

    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();


    useMotionValueEvent(scrollY, "change",(latest)=> {
        if(latest > 900 ) setScrolled(true);
        else setScrolled(false); 
    })


  return (
    <div className={` flex-col gap-8 fixed z-50 right-8 top-[90%]  ${
     scrolled ? "flex" : "hidden"   
    }`}>
      <Button 
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      variant="outline" 
      size="icon" 
      className="rounded-full cursor-pointer">

        <ArrowUpIcon />
        
      </Button>
    </div>
  )
}
