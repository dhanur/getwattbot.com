import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import ValueProposition from "./ValueProposition";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { subscribeToNewsletter } from "@/lib/newsletter";
import { typography } from "@/styles/typography";

interface HomeProps {
  headerLogo?: string;
  headerNavItems?: Array<{
    label: string;
    href: string;
  }>;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroCtaText?: string;
  onHeroCtaClick?: () => void;
}

const Home = ({
  headerLogo = "LOGO",
  headerNavItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  heroHeadline = "Welcome to Our Platform",
  heroSubheadline = "Experience the future of digital innovation with our cutting-edge solutions",
  heroCtaText = "Get Started",
  onHeroCtaClick = () => console.log("CTA clicked"),
}: HomeProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
          className="w-full h-full"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      url: "https://www.linkedin.com/company/thewattbot/",
    },
    {
      name: "X",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
          className="w-full h-full"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "https://x.com/getwattbot",
    },
    {
      name: "Reddit",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
          className="w-full h-full"
        >
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      ),
      url: "https://www.reddit.com/user/WattBotBot/",
    },
    {
      name: "Youtube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
          className="w-full h-full"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "https://www.youtube.com/channel/UCLeXciUf1YVR5Uz9El6k8jw",
    },
  ];

  return (
    <motion.div
      className="min-h-screen w-full bg-[#262626] font-lexend overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero
        headline={heroHeadline}
        subheadline={heroSubheadline}
        ctaText={heroCtaText}
        onCtaClick={onHeroCtaClick}
      />
      <ValueProposition />
      <Testimonials />
      {/* Audiences - CTA Section */}
      <section className="w-full bg-[#262626] px-6 md:px-8 lg:px-16 py-12 md:py-18 overflow-x-hidden">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-16 md:gap-18 text-center">
          {/* Installer CTA */}
          <div className="space-y-3">
            <h2 className="text-[#FBBF24] text-2xl md:text-3xl font-[900] font-lexend leading-[1.4] tracking-[0.03em]">
              ARE YOU A LICENSED RESIDENTIAL SOLAR INSTALLER?
            </h2>
            <h3 className="text-white text-xl md:text-xl font-normal font-lexend leading-[1.4] tracking-[0.03em] w-full px-4 md:px-0">
              Get a head start on selling season with America's Best Solar
              Calculator.
            </h3>
            <div className="flex justify-center pt-4">
              <Button
                onClick={() =>
                  window.open("https://cal.com/dhanur/wattbot-demo", "_blank")
                }
                className={`bg-[#C52159] hover:bg-[#C52159]/90 text-white ${typography.button} px-6 py-2 rounded-[13.41px] h-auto w-auto`}
              >
                BOOK A CALL
              </Button>
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="space-y-3">
            <h2 className="text-[#FBBF24] text-2xl md:text-3xl font-[900] font-lexend leading-[1.4] tracking-[0.03em]">
              DO YOU SERVE SOLAR INSTALLERS?
            </h2>
            <h3 className="text-white text-xl md:text-xl font-normal font-lexend leading-[1.4] tracking-[0.03em] w-full px-4 md:px-0">
              We partner with financiers, distributors, OEMs, design/proposal
              platforms and installer networks. If you're in those camps, we'd
              love to talk.
            </h3>
            <div className="flex justify-center pt-4">
              <Button
                onClick={() =>
                  window.open("https://cal.com/dhanur/wattbot-demo", "_blank")
                }
                className={`bg-[#C52159] hover:bg-[#C52159]/90 text-white ${typography.button} px-6 py-2 rounded-[13.41px] h-auto w-auto`}
              >
                BOOK A CALL
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* <AboutUs /> */}
      {/* Solarize America Image */}
      <section className="w-full bg-[#262626] px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="max-w-[684px] mx-auto">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[280px] md:max-w-[300px]">
              <img
                src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//ws-bottom.gif"
                alt="Let's solarize america"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Follow Us Section */}
      <section className="w-full bg-[#262626] px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="max-w-[684px] mx-auto">
          <div className="flex-col justify-center items-center gap-8 inline-flex w-full">
            <div
              className={`${typography.h1} ${typography.colors.amber} text-center`}
            >
              FOLLOW US ON
            </div>
            <div className="flex gap-4 md:gap-6 px-4 max-w-[280px] md:max-w-none mx-auto w-full justify-center">
              {socialLinks
                .filter(
                  (social) => !["Facebook", "Instagram"].includes(social.name),
                )
                .map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] relative overflow-hidden hover:opacity-80 transition-opacity"
                  >
                    {social.icon}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
