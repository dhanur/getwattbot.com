import React from "react";

const TickerBanner = () => {
  return (
    <div className="bg-[#FBBF24] h-8 md:h-10 flex items-center justify-center px-4">
      <div className="text-[#262626] font-lexend font-medium text-sm md:text-lg text-center">
        Read why we built{" "}
        <a
          href="https://www.linkedin.com/posts/dhanurgrandhi_tldr-we-announced-a-cool-thing-hit-us-activity-7298813551719133185-Z0lw"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80 transition-opacity"
        >
          America's Best Solar Calculator
        </a>
      </div>
    </div>
  );
};

export default TickerBanner;
