import Sheet from "../ui/Sheet"


type ChildProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }



export default function Navbar({isOpen, setIsOpen}:ChildProps) {


    const handleClose = ()=> {
        setIsOpen(false);
    }

    return (
        <>
         <nav className="sm:flex hidden  items-center justify-between px-4 relative z-10 ">
     
        <div className="flex items-center gap-8 text-sm">
          <a href="#work" className="hover:opacity-60 transition-opacity cursor-pointer">Work</a>
          <a href="#about-section" className="hover:opacity-60 transition-opacity cursor-pointer">About</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity cursor-pointer">Contact</a>
        </div>

      </nav>

      <Sheet
        onClose={handleClose}
        isOpen={isOpen}  
        
        />
        </>
       
    )
}