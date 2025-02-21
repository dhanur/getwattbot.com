import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[80vh] w-full bg-[#262626] px-6 md:px-8 lg:px-16 flex items-center py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Left Column - Logo */}
        <div className="flex justify-center">
          <div className="relative w-[280px] md:w-[225px]">
            <img
              src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//ws-top.gif"
              alt="Building America's Best Solar Calculator"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Column - Phone Mockup */}
        <div className="flex flex-col justify-center items-center gap-y-1 relative phone-container">
          <motion.div
            className="w-[340px] md:w-[281px] relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <img
              src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//Sunshine%20Energy%20Co.gif"
              alt="Solar Calculator App"
              className="w-full rounded-[48px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
