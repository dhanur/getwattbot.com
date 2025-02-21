import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import Sidebar from "./Sidebar";

interface HeaderProps {
  logo?: string;
  navigationItems?: Array<{
    label: string;
    href: string;
  }>;
}

const Header = ({
  logo = "LOGO",
  navigationItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
}: HeaderProps) => {
  const [showHeader, setShowHeader] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight - 300; // Show header earlier
      setShowHeader(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-0 left-0 right-0 w-full h-24 backdrop-blur-md bg-[#262626]/80 border-b border-zinc-800 px-4 z-50 flex items-center"
        >
          <div className="w-full max-w-[684px] mx-auto flex items-center justify-between">
            {/* Logo */}
            <button className="flex items-center gap-2 focus:outline-none">
              <div className="relative rounded-full border-[4px] border-[#FBBF24] p-0 box-border w-16 h-16">
                <img
                  src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets/bc-wr-yz.gif"
                  alt="Tempo Logo"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[102%] h-[102%] rounded-full object-cover"
                />
              </div>
            </button>
            {/* Sidebar temporarily disabled */}
            {/* <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} /> */}

            <div className="hidden md:flex flex-col items-center gap-1">
              <span className="text-white text-lg font-normal font-lexend">
                Want a Demo?
              </span>
              <Button
                className="bg-[#C52159] hover:bg-[#C52159]/90 text-white font-black font-['Lexend Deca'] text-lg px-4 py-1.5 rounded-[13.41px] h-auto w-auto"
                onClick={() =>
                  window.open("https://cal.com/dhanur/wattbot-demo", "_blank")
                }
              >
                BOOK A CALL
              </Button>
            </div>

            <div className="md:hidden flex flex-col items-center justify-center gap-1">
              <span className="text-white text-sm font-normal font-lexend">
                Want a Demo?
              </span>
              <Button
                className="bg-[#C52159] hover:bg-[#C52159]/90 text-white font-black font-['Lexend Deca'] text-lg px-4 py-1.5 rounded-[13.41px] h-auto w-auto"
                onClick={() =>
                  window.open("https://cal.com/dhanur/wattbot-demo", "_blank")
                }
              >
                BOOK A CALL
              </Button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
