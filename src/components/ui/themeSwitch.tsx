import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react";

export default function ThemeSwitch() {
  
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{setMounted(true);},[]);

    if (!mounted) return null;

    return (
     
      <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`cursor-pointer relative w-12 h-6 rounded-full p-0.5 transition-all duration-300 active:scale-95 ${
        theme === "dark" 
          ? 'bg-white/20 hover:bg-white/30 shadow-[inset_0_1px_3px_rgba(0,0,0,0.3),inset_0_-1px_1px_rgba(255,255,255,0.1)]' 
          : 'bg-black/20 hover:bg-black/30 shadow-[inset_0_1px_3px_rgba(0,0,0,0.2),inset_0_-1px_1px_rgba(255,255,255,0.2)]'
      }`}
      aria-label="Toggle theme"
    >
   
      <div className={`w-5 h-5 rounded-full transform transition-all duration-300 flex items-center justify-center active:scale-90 ${
        theme === "dark" 
          ? 'translate-x-0 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.9)]' 
          : 'translate-x-6 bg-black shadow-[0_2px_4px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.5),0_1px_3px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)]'
      }`}>
        {/* Icon Container */}
        <div className="relative overflow-hidden w-3 h-3">
          <Moon 
            size={12} 
            className={`absolute transform transition-all duration-300 drop-shadow-sm ${
              theme === "dark" 
                ? 'translate-y-0 opacity-100 text-black' 
                : '-translate-y-3 opacity-0 text-black'
            }`}
          />
          <Sun 
            size={12} 
            className={`absolute transform transition-all duration-300 drop-shadow-sm ${
              theme === "dark" 
                ? 'translate-y-3 opacity-0 text-white' 
                : 'translate-y-0 opacity-100 text-white'
            }`}
          />
        </div>
      </div>
    </button>
    )
}



