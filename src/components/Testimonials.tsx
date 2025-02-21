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
    <section className="w-full bg-[#262626] px-4 md:px-8 lg:px-16 py-16 md:py-32">
      <div className="max-w-[912px] mx-auto">
        <div className="flex flex-col gap-16 md:gap-24">
          {testimonials.map((testimonial, index) => (
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
              className="bg-[#323437] rounded-[10px] p-8 flex flex-col justify-between min-h-[300px] max-w-[600px] mx-auto w-full"
            >
              <p className="text-white text-[35.09px] font-normal font-lexend leading-[46.78px] tracking-[0.03em] mb-8">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-[#FBBF24] text-[35.09px] font-black font-lexend leading-[46.78px] tracking-[0.03em]">
                  {testimonial.author}
                </p>
                <p className="text-[#d1d0c5] text-[24px] font-normal font-lexend leading-[32px] tracking-[0.03em]">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
