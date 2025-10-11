import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { startTransition } from "react";



export default function ThemeSwitch() {
  
    const { theme, setTheme } = useTheme();

    
   


    return (
     
      <button
      onClick={() => { 
          startTransition( () => {
                  setTheme(theme === "dark" ? "light" : "dark");
                });
            }}

      className='cursor-pointer relative w-12 h-6 rounded-full p-0.5  active:scale-95 bg-toggle hover:bg-toggle-hover shadow-toggle '
      aria-label="Toggle theme"
    >
   
      <div className='w-5 h-5 rounded-full switchX flex items-center justify-center active:scale-90  bg-switch shadow-switch hover:shadow-switch-hover'>
        {/* Icon Container */}
        <div className="relative overflow-hidden w-3 h-3">
          <Moon 
            size={12} 
            className='absolute moonY  drop-shadow-sm opacity-moon text-moon'
          />
          <Sun 
            size={12} 
            className='absolute sunY opacity-sun text-sun  drop-shadow-sm '
          />
        </div>
      </div>
    </button>
    )
}



