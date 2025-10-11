import { X, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {

    const [status, setStatus] = useState("idle");

    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const abortRef = useRef<AbortController | null>(null);
  
    useEffect(() => {
      // cleanup on unmount: cancel pending request
      return () => {
        if (abortRef.current) abortRef.current.abort();
      };
    }, []);
  
    const validateEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
  
      // clear error while typing
      if (errors[name as keyof typeof errors]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus("sending");
  
      const controller = new AbortController();
      abortRef.current = controller;
  
      const { name, email, message } = form;
      const trimmedName = name.trim();
      const trimmedEmail = email.trim();
      const trimmedMessage = message.trim();
  
      const newErrors = { name: "", email: "", message: "" };
  
      // ---- VALIDATION ----
      if (!trimmedName) newErrors.name = "Name is required";
      else if (trimmedName.length < 3)
        newErrors.name = "Name must be at least 3 characters";
  
      if (!trimmedEmail) newErrors.email = "Email is required";
      else if (!validateEmail(trimmedEmail))
        newErrors.email = "Please enter a valid email";
  
      if (!trimmedMessage) newErrors.message = "Message is required";
      else if (trimmedMessage.length < 10)
        newErrors.message = "Message must be at least 10 characters";
  
      setErrors(newErrors);
  
      // if any validation error, stop here
      if (Object.values(newErrors).some((err) => err)) {
        setStatus("idle");
        return;
      }
  
      try {
        const res = await fetch("https://formspree.io/f/xzzjjwww", {
          method: "POST",
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          signal: controller.signal,
        });
  
        if (res.ok) {
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
        } else {
          console.error("Formspree error", res.status);
          setStatus("error");
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          console.warn("Form submit aborted");
        } else {
          console.error("Network error sending form", error);
          setStatus("error");
        }
      } finally {
        abortRef.current = null;
      }
    };


  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="pointer-events-auto w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative rounded-3xl transition-colors duration-200 overflow-hidden bg-background border border-border`}>
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-200`}></div>
                
                <div className="relative p-6 sm:p-8 ">
                  {/* Header */}
                  <div className="flex justify-center items-start  mb-6 sm:mb-8 relative">
                    <div>
                      <div className={`text-xs sm:text-sm opacity-60 tracking-wide mb-2 transition-colors duration-200 text-muted-foreground`}>
                        — Get In Touch
                      </div>
                      <h2 className="text-2xl sm:text-3xl">
                        Let&apos;s <span className="font-light">Connect</span>
                      </h2>
                    </div>
                    
                    <button
                      onClick={onClose}
                      className={`p-2 rounded-full transition-all duration-300  active:scale-95 hover:bg-accent absolute top-0 right-0`}
                      aria-label="Close"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Form */}
                  {status !== "sending" &&
                   status !== "success"  ? (
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label 
                          htmlFor="name" 
                          className={`block text-sm transition-colors duration-500 text-foreground text-left`}
                        >
                          Name 
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={form.name}
                          name="name"
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-1 
                            bg-secondary border border-border text-foreground placeholder-muted-foreground focus:bg-background focus:border-primary/50 focus:ring-primary/20`}
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label 
                          htmlFor="email" 
                          className={`block text-sm mb-2 transition-colors duration-500 text-foreground text-left`}
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required={false}
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                            errors.email 
                              ? 'border-2 border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                              : ''
                          }
                              bg-secondary border border-border text-foreground placeholder-muted-foreground focus:bg-background focus:border-primary/50 focus:ring-primary/20
                          `}
                        />
                        <div className="h-5 mt-1">
                          {errors.email && (
                            <motion.p 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-xs text-red-500 text-right"
                            >
                              {errors.email}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label 
                          htmlFor="message" 
                          className={`block text-sm mb-2 transition-colors duration-200 text-foreground text-left
                          `}
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell me about your project or idea..."
                          className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                            errors.message 
                              ? 'border-2 border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                              : ''
                          }                            
                               bg-secondary border border-border text-foreground placeholder-muted-foreground focus:bg-background focus:border-primary/50 focus:ring-primary/20
                          `}
                        />
                        <div className="h-5 mt-1">
                          {errors.message && (
                            <motion.p 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-xs text-red-500 text-right"
                            >
                              {errors.message}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className={`group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer ${
                          status === "sending"
                            ? 'opacity-60 cursor-not-allowed' 
                            : 'hover:scale-[1.02]'
                        }
                            bg-primary text-primary-foreground hover:bg-primary/90
                        `}
                      >
                        {status === "sending" ? (
                          <>
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    // Success Message
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-green-500/20    `}
                      >
                        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl mb-2">Message Sent!</h3>
                      <p className={`transition-colors duration-500 text-muted-foreground `}>
                        Thanks for reaching out. I&apos;ll get back to you soon!
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}