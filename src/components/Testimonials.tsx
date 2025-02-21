import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We're driving traffic to WattBot rather than our website.",
    author: "JACOB W.",
    role: "Sales @ Transform Solar",
  },
  {
    quote:
      "The second our boss saw WattBot he posted it on the team chats. He was SO EXCITED!",
    author: "OLIVIA S.",
    role: "Marketing @ Good Faith Energy",
  },
  {
    quote:
      "WattBot is the anti-venom to the poison that is killing this industry",
    author: "THOMAS W.",
    role: "Seasoned solar sales leader",
  },
  {
    quote:
      "We'll use this to sell. But we'll also use this to get our customers to sell for us!",
    author: "PABLO C.",
    role: "CEO @ Sprightful Solar",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#262626] px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="max-w-[684px] mx-auto">
        <h2 className="text-[#FBBF24] text-2xl md:text-[40px] font-[900] font-lexend leading-[1.4] tracking-[0.03em] text-center mb-12 md:mb-18">
          WHAT PEOPLE ARE SAYING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#323437] rounded-[10px] p-6 md:p-6 flex flex-col justify-between min-h-[250px] md:min-h-[225px] max-w-[280px] md:max-w-[450px] mx-auto w-full"
            >
              <p className="text-white text-[24px] md:text-[26px] font-normal font-lexend leading-[1.4] md:leading-[35px] tracking-[0.03em] mb-8">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-[#FBBF24] text-[24px] md:text-[26px] font-black font-lexend leading-[1.4] md:leading-[35px] tracking-[0.03em]">
                  {testimonial.author}
                </p>
                <p className="text-[#FBBF24] text-[20px] md:text-[18px] font-normal font-lexend leading-[1.4] md:leading-[24px] tracking-[0.03em]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
