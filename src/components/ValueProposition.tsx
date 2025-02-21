import React from "react";
import { motion } from "framer-motion";

const PulsingArrow = ({ direction = "up" }: { direction?: "up" | "down" }) => (
  <motion.div
    animate={{
      y: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="w-24 h-24 relative text-amber-400"
  >
    {direction === "up" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    )}
  </motion.div>
);

const ValueProposition = () => {
  return (
    <section className="w-full bg-[#262626] px-4 md:px-8 lg:px-16 py-16 md:py-32 overflow-x-hidden">
      <div className="max-w-[912px] mx-auto flex flex-col items-center gap-16 text-center">
        {/* Problem Statement */}
        <div className="space-y-4">
          <h2 className="text-[#FBBF24] text-2xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
            Consumers are overwhelmed.
          </h2>
          <h3 className="text-[#d1d0c5] text-lg md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em] max-w-[739px] px-4 md:px-0">
            Millions should switch to solar. But they don't know, don't care,
            don't trust, and don't act.
          </h3>
        </div>

        {/* Context */}
        <div className="space-y-4">
          <h2 className="text-[#FBBF24] text-2xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
            And who can blame them?
          </h2>
          <h3 className="text-[#d1d0c5] text-lg md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em] max-w-[739px] px-4 md:px-0">
            They have chaotic lives and short attention spans. Solar is a major
            construction project.
          </h3>
        </div>

        {/* Solution Introduction */}
        <h2 className="text-[#FBBF24] text-2xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
          Enter WattBot.
        </h2>

        {/* Main Value Proposition */}
        <div className="space-y-12">
          {/* For Installers */}
          <div className="space-y-4">
            <h2 className="text-[#FBBF24] text-2xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
              Made for solar installers.
            </h2>
            <h3 className="text-[#d1d0c5] text-lg md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em] max-w-[739px] px-4 md:px-0">
              Use WattBot to boost your sales and marketing conversion. Turn any
              consumer touchpoint into a chance to attract, educate, qualify, or
              nurture.
            </h3>
            <div className="flex justify-center">
              <PulsingArrow direction="down" />
            </div>
          </div>

          {/* Phone Screenshot */}
          <div className="flex justify-center">
            <img
              src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//main-screenshot.png"
              alt="WattBot App Screenshot"
              className="w-[320px] md:w-[500px] h-auto rounded-[64px]"
            />
          </div>

          {/* For Consumers */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <PulsingArrow direction="up" />
            </div>
            <h2 className="text-[#FBBF24] text-2xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
              Designed for consumers.
            </h2>
            <h3 className="text-[#d1d0c5] text-lg md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em] max-w-[739px] px-4 md:px-0">
              Give your prospects a fun, free and fact-based way to find out if
              solar can work for them. Not boring, not pushy.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
