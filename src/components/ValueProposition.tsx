import React from "react";

const ValueProposition = () => {
  return (
    <section className="w-full bg-[#262626] px-6 md:px-8 lg:px-16 py-12 md:py-18 overflow-x-hidden">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-16 md:gap-18 text-center">
        {/* Main Value Proposition */}
        <div className="space-y-12 w-full">
          {/* Title */}
          <div className="space-y-3">
            <h2 className="text-[#FBBF24] text-2xl md:text-3xl font-[900] font-lexend leading-[1.4] tracking-[0.03em]">
              THE SOLAR CALCULATOR
              <br />
              DESIGNED TO CONVERT
            </h2>
            <h3 className="text-white text-xl md:text-xl font-normal font-lexend leading-[1.4] tracking-[0.03em] w-full px-4 md:px-0">
              Transform every consumer interaction into an opportunity to
              attract, educate, qualify, or nurture.
            </h3>
          </div>

          {/* Phone Screenshot and Feature Tiles */}
          <div className="flex justify-center items-center w-full">
            <div className="flex items-center gap-4 md:gap-6">
              <div>
                <img
                  src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//main-screenshot.png"
                  alt="WattBot App Screenshot"
                  className="w-[240px] md:w-[281px] h-auto rounded-[48px]"
                />
              </div>
              <div>
                <img
                  src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//feature-tiles.png"
                  alt="Feature Tiles"
                  className="w-[90px] md:w-[100px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="space-y-3">
          <h2 className="text-[#FBBF24] text-2xl md:text-3xl font-[900] font-lexend leading-[1.4] tracking-[0.03em]">
            CONSUMERS ARE OVERWHELMED.
          </h2>
          <h3 className="text-white text-xl md:text-xl font-normal font-lexend leading-[1.4] tracking-[0.03em] w-full px-4 md:px-0">
            Millions should switch to solar. But they don't know, don't care,
            don't trust, and don't act.
          </h3>
        </div>

        {/* Context */}
        <div className="space-y-3">
          <h2 className="text-[#FBBF24] text-2xl md:text-3xl font-[900] font-lexend leading-[1.4] tracking-[0.03em]">
            AND WHO CAN BLAME THEM?
          </h2>
          <h3 className="text-white text-xl md:text-xl font-normal font-lexend leading-[1.4] tracking-[0.03em] w-full px-4 md:px-0">
            Solar is a major construction project. They have chaotic lives and
            short attention spans.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
