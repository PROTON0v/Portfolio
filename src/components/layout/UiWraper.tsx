'use client'

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

export default function SectionsWrapper() {

    const {theme} = useTheme();
		const [mounted, setMounted] = useState(false);

		// Prevent hydration mismatch
		useEffect(() => {
			setMounted(true);
		}, []);
	
		if (!mounted) return null; 




    return (
			<div className={`flex flex-col items-center justify-center  bg-background 
				${theme === "dark" ? ' text-white' : ' text-foreground'}`}>
					<Hero />
					<About />
			</div>
    )


}