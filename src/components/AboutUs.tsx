import React from "react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "DHANUR GRANDHI",
    bio: (
      <>
        Led products at{" "}
        <a
          href="https://www.sunrun.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FBBF24] hover:underline"
        >
          Sunrun
        </a>
        ,{" "}
        <a
          href="https://joinmosaic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FBBF24] hover:underline"
        >
          Mosaic
        </a>{" "}
        and{" "}
        <a
          href="https://span.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FBBF24] hover:underline"
        >
          SPAN
        </a>{" "}
        to deploy 250K+ solar systems, backup batteries, heat pumps, smart
        electrical panels and EV chargers across America.
      </>
    ),
  },
  {
    name: "NATHAN EIDELSON",
    bio: (
      <>
        Climate-obsessed software maker. Founding engineer/designer at{" "}
        <a
          href="https://airtable.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FBBF24] hover:underline"
        >
          Airtable
        </a>{" "}
        and{" "}
        <a
          href="https://aquabyte.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FBBF24] hover:underline"
        >
          Aquabyte
        </a>
        . Co-founder of{" "}
        <a
          href="https://theshareway.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FBBF24] hover:underline"
        >
          TheShareway
        </a>
        . Co-author of the definitive guide to{" "}
        <a
          href="https://climatepapa.com/software"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FBBF24] hover:underline"
        >
          software x climate
        </a>
        .
      </>
    ),
  },
];

const AboutUs = () => {
  return (
    <section className="w-full bg-[#262626] px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="max-w-[739px] mx-auto">
        <h1 className="text-[#FBBF24] text-2xl md:text-[40px] font-[900] font-lexend leading-[1.4] tracking-[0.03em] text-center mb-12 md:mb-16">
          TEAM WATTBOT
        </h1>
        <div className="space-y-[145px]">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="space-y-2"
            >
              <h2 className="text-[#FBBF24] text-2xl md:text-3xl font-[900] font-lexend leading-[1.4] tracking-[0.03em]">
                {founder.name}
              </h2>
              <p className="text-white text-xl md:text-xl font-normal font-lexend leading-[1.4] tracking-[0.03em]">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
