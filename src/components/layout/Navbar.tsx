import Sheet from "../ui/Sheet"


type ChildProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }



export default function Navbar({isOpen, setIsOpen}:ChildProps) {


    const handleClose = ()=> {
        setIsOpen(false);
    }

    const handleScrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

    return (
        <>
         <nav className="sm:flex hidden  items-center justify-between px-4 relative z-10 ">
     
        <div className="flex items-center gap-8 text-sm">
          <a href="#projects-section" className="hover:opacity-60  cursor-pointer">Work</a>
          <a href="#about-section" className="hover:opacity-60  cursor-pointer">About</a>
          <button onClick={handleScrollToBottom} className="hover:opacity-60  cursor-pointer">Contact</button>
        </div>

      </nav>

      <Sheet
        onClose={handleClose}
        isOpen={isOpen}  
        
        />
        </>
       
    )
}