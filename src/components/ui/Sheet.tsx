"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

interface SheetProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = ["Work", "About me", "Projects", "Contact"]

export default function Sheet({ isOpen, onClose }: SheetProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-card)] text-[var(--color-foreground)] border-b border-[var(--color-border)] shadow-lg"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }} // smooth, not bouncy
          >
            <div className="flex flex-col items-start py-6 px-6 gap-4">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    console.log(`${item} clicked`)
                    onClose()
                  }}
                  className="w-full text-left text-base font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)]  py-3 border-b border-[var(--color-border)] last:border-none"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
