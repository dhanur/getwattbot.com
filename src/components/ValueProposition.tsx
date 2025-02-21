import React from "react";
import { motion } from "framer-motion";

const ValueProposition = () => {
  return (
    <section className="w-full bg-[#262626] px-4 md:px-8 lg:px-16 py-16 md:py-32 overflow-x-hidden">
      <div className="max-w-[912px] mx-auto flex flex-col items-center gap-16 text-center">
        {/* Problem Statement */}
        <div className="space-y-4">
          <h2 className="text-[#FBBF24] text-[28px] md:text-5xl font-black font-lexend leading-[1.4] md:leading-[56px] tracking-[0.03em]">
            Consumers are overwhelmed.
          </h2>
          <h3 className="text-white text-[24px] md:text-[35.09px] font-normal font-lexend leading-[1.4] md:leading-[46.78px] tracking-[0.03em] max-w-[739px] px-4 md:px-0">
            Millions should switch to solar. But they don't know, don't care,
            don't trust, and don't act.
          </h3>
        </div>

        {/* Context */}
        <div className="space-y-4">
          <h2 className="text-[#FBBF24] text-[28px] md:text-5xl font-black font-lexend leading-[1.4] md:leading-[56px] tracking-[0.03em]">
            And who can blame them?
          </h2>
          <h3 className="text-white text-[24px] md:text-[35.09px] font-normal font-lexend leading-[1.4] md:leading-[46.78px] tracking-[0.03em] max-w-[739px] px-4 md:px-0">
            They have chaotic lives and short attention spans. Solar is a major
            construction project.
          </h3>
        </div>

        {/* Solution Introduction */}
        <h2 className="text-[#FBBF24] text-[28px] md:text-5xl font-black font-lexend leading-[1.4] md:leading-[56px] tracking-[0.03em]">
          Enter WattBot.
        </h2>

        {/* Main Value Proposition */}
        <div className="space-y-16">
          {/* For Installers */}
          <div className="space-y-4">
            <h2 className="text-[#FBBF24] text-[28px] md:text-5xl font-black font-lexend leading-[1.4] md:leading-[56px] tracking-[0.03em]">
              Designed to convert.
            </h2>
            <h3 className="text-white text-[24px] md:text-[35.09px] font-normal font-lexend leading-[1.4] md:leading-[46.78px] tracking-[0.03em] max-w-[739px] px-4 md:px-0">
              Drive higher conversion by transforming every consumer interaction
              into an opportunity to attract, educate, qualify, or nurture.
            </h3>
          </div>

          {/* Phone Screenshot */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  duration: 1,
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", bounce: 0.4 },
              }}
            >
              <img
                src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//main-screenshot.png"
                alt="WattBot App Screenshot"
                className="w-[320px] md:w-[500px] h-auto rounded-[64px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
