import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".phone-container")) {
        setIsClicked(false);
      }
    };

    if (isClicked) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isClicked]);

  return (
    <section className="min-h-screen w-full bg-[#262626] px-4 md:px-8 lg:px-16 flex items-center py-20 md:py-0 overflow-x-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left Column - Logo */}
        <div className="flex justify-center">
          <img
            src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//building%20america's%20best%20solar%20calculator.png"
            alt="Building America's Best Solar Calculator"
            className="w-[280px] md:w-[400px] h-auto"
          />
        </div>

        {/* Right Column - Phone Mockup */}
        <div className="flex flex-col justify-center items-center gap-y-1 relative phone-container">
          <motion.div
            className="w-[280px] md:w-[396px] cursor-pointer relative z-10"
            animate={{
              scale: isClicked ? 0.8 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsClicked(!isClicked);
            }}
          >
            <img
              src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//final_gifbrewery_23MB.gif"
              alt="Solar Calculator App"
              className="w-full rounded-[64px]"
            />
          </motion.div>

          <AnimatePresence>
            {isClicked && (
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 0.8 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 backdrop-blur-md bg-black/95 rounded-[64px] z-20
                  flex flex-col items-center justify-center gap-2"
              >
                <motion.h3
                  initial={{ scale: 1 }}
                  animate={{ scale: 0.8 }}
                  exit={{ scale: 1 }}
                  className="text-white text-[35.09px] font-normal font-lexend leading-[46.78px] tracking-[0.03em]"
                >
                  Want a Demo?
                </motion.h3>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 0.8 }}
                  exit={{ scale: 1 }}
                >
                  <Button
                    className="bg-[#C52159] hover:bg-[#C52159]/90 text-white font-black font-['Lexend Deca'] text-[33.52px] px-8 py-3 rounded-[13.41px] h-auto w-auto"
                    onClick={() =>
                      window.open(
                        "https://cal.com/dhanur/wattbot-demo",
                        "_blank",
                      )
                    }
                  >
                    BOOK A CALL
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
