'use client'

import { lazy, Suspense } from 'react';
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import ScrollToTop from "@/components/ui/ScrollToTop"
// Lazy load heavy components
const Testimonials = lazy(() => import("../sections/Testimonials"));
const CallToAction = lazy(() => import("./CallToAction"));


export default function SectionsWrapper() {





    return (
			<div className={`flex flex-col items-center justify-center w-full bg-background pb-24 text-foreground relative`}>
					<Hero />
					<About  />
					<Projects  />
				 {/* Divider Line */}
				 <div className={`w-full h-px mb-2 sm:mb-15  bg-gradient-to-r from-transparent via-border to-transparent`}></div>	
					<Suspense fallback={<div className="h-96 flex items-center justify-center text-muted-foreground">Loading testimonials...</div>}>
						<Testimonials  speed={20}/>
					</Suspense>
					<Suspense fallback={<div className="h-96 flex items-center justify-center text-muted-foreground">Loading call to action...</div>}>
						<CallToAction />
					</Suspense>
					<ScrollToTop />
			</div>
    )


}