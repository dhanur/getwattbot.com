import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { subscribeToNewsletter } from "@/lib/newsletter";

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
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#d1d0c5"
          className="w-full h-full"
        >
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
        </svg>
      ),
      url: "https://www.facebook.com/people/WattBot/61573196256107/",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#d1d0c5"
          className="w-full h-full"
        >
          <path d="M12 2c-2.716 0-3.056.012-4.123.06c-1.064.049-1.791.218-2.427.465a4.901 4.901 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772a4.901 4.901 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465c1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.772-1.153a4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 0 0-1.153-1.772a4.901 4.901 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058c.976.045 1.505.207 1.858.344c.466.181.8.398 1.15.748c.35.35.566.684.748 1.15c.136.353.3.882.344 1.857c.048 1.055.058 1.37.058 4.041c0 2.67-.01 2.986-.058 4.04c-.045.976-.208 1.505-.344 1.858c-.182.466-.398.8-.748 1.15c-.35.35-.684.566-1.15.748c-.353.136-.882.3-1.857.344c-1.054.048-1.37.058-4.041.058c-2.67 0-2.987-.01-4.04-.058c-.976-.045-1.505-.208-1.858-.344a3.097 3.097 0 0 1-1.15-.748a3.098 3.098 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857c-.048-1.055-.058-1.37-.058-4.041c0-2.67.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858c.181-.466.398-.8.748-1.15c.35-.35.684-.567 1.15-.748c.353-.137.882-.3 1.857-.344c1.055-.048 1.37-.058 4.041-.058zm0 11.531a3.333 3.333 0 1 1 0-6.666a3.333 3.333 0 0 1 0 6.666zm0-8.468a5.135 5.135 0 1 0 0 10.27a5.135 5.135 0 0 0 0-10.27zm6.538-.203a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0z" />
        </svg>
      ),
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#d1d0c5"
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
          fill="#d1d0c5"
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
          fill="#d1d0c5"
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
          fill="#d1d0c5"
          className="w-full h-full"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "https://www.youtube.com/channel/UCLeXciUf1YVR5Uz9El6k8jw",
    },
  ];

  const MotionDiv = motion.div;

  return (
    <MotionDiv
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
      {/* Content Section */}
      <div className="px-4 md:px-8 lg:px-16 py-12 mt-24 bg-[#262626]">
        <div className="max-w-[912px] mx-auto md:text-left text-center">
          <div className="space-y-[219px] font-lexend max-w-[600px] md:max-w-full mx-auto">
            {/* Problem Statement */}
            <div className="space-y-[38.99px]">
              <div>
                <h2 className="text-[#FBBF24] text-3xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
                  Consumers are overwhelmed.
                </h2>
                <p className="text-[#d1d0c5] text-2xl md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em]">
                  Millions should switch to solar, but they don't know, don't
                  care, don't trust, and don't act.
                </p>
                <p className="text-[#d1d0c5] text-2xl md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em] mt-[38.99px]">
                  And who can blame them? Solar is a major construction project.
                  They have chaotic lives and short attention spans.
                </p>
              </div>
            </div>

            {/* Solution Introduction */}
            <div className="space-y-[38.99px]">
              <h2 className="text-[#FBBF24] text-3xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
                Enter WattBot.
              </h2>
            </div>

            {/* For Consumers Section */}
            <div>
              <h2 className="text-[#FBBF24] text-3xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
                For consumers: WattBot is the best "solar calculator".
              </h2>
              <p className="text-[#d1d0c5] text-2xl md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em]">
                A fun, free and fact-based way to find out if solar can work.
                Not boring, not pushy.
              </p>
            </div>

            {/* For Industry Section */}
            <div className="mt-[219px]">
              <h2 className="text-[#FBBF24] text-3xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
                For providers: WattBot is a powerful conversion booster.
              </h2>
              <p className="text-[#d1d0c5] text-2xl md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em]">
                A digital tool that turns every consumer touchpoint into a
                chance to attract, educate, qualify, or nurture.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Three Column Image Section */}
      <div className="px-4 md:px-8 lg:px-16 py-16 md:py-32 bg-[#262626] overflow-hidden">
        <div className="max-w-[912px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            {[0, 1, 2].map((index) => (
              <MotionDiv
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <img
                  src={
                    [
                      "https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//10%20ways%20to%20share.png",
                      "https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//64%20ways%20to%20use.png",
                      "https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//online%20and%20in%20person.png",
                    ][index]
                  }
                  alt={
                    [
                      "10 ways to share",
                      "64 ways to use",
                      "Online and in person",
                    ][index]
                  }
                  className="w-full max-w-[280px] h-auto"
                />
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="px-4 md:px-8 lg:px-16 py-16 md:py-32 bg-[#262626]">
        <div className="max-w-[912px] mx-auto space-y-16 md:space-y-[219px]">
          {/* Installer CTA */}
          <div className="space-y-7 text-center">
            <h2 className="text-amber-400 text-3xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
              Are you a solar installer?
            </h2>
            <h3 className="text-[#d1d0c5] text-2xl md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em]">
              Get a head start on selling season with America's Best Solar
              Calculator.
            </h3>
            <div className="flex justify-center">
              <Button
                onClick={() =>
                  window.open("https://cal.com/dhanur/wattbot-demo", "_blank")
                }
                className="bg-[#C52159] hover:bg-[#C52159]/90 text-white font-black font-['Lexend Deca'] text-2xl md:text-[33.52px] px-6 md:px-8 py-2 md:py-3 rounded-[13.41px] h-auto w-auto"
              >
                BOOK A CALL
              </Button>
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="space-y-7 text-center">
            <h2 className="text-amber-400 text-3xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
              Are you an Industry Partner?
            </h2>
            <h3 className="text-[#d1d0c5] text-2xl md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em]">
              We're working with financiers, distributors, OEMs, design/proposal
              platforms, installer networks and non-profits. If you fall in
              those camps, we'd love to talk!
            </h3>
            <div className="flex justify-center">
              <Button
                onClick={() =>
                  window.open("https://cal.com/dhanur/wattbot-demo", "_blank")
                }
                className="bg-[#C52159] hover:bg-[#C52159]/90 text-white font-black font-['Lexend Deca'] text-2xl md:text-[33.52px] px-6 md:px-8 py-2 md:py-3 rounded-[13.41px] h-auto w-auto"
              >
                BOOK A CALL
              </Button>
            </div>
          </div>

          {/* Solarize America Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[300px] md:max-w-[400px]">
              <img
                src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets//let's%20solarize%20america.png"
                alt="Let's solarize america"
                className="w-full h-auto"
              />
              <div className="absolute top-[58%] left-[29.5%] w-[41%] aspect-square overflow-hidden rounded-full bg-[#1a1a1a]">
                <img
                  src="https://loeugtlzrlveghrxgjuu.supabase.co/storage/v1/object/public/assets/bc-wr-yz.gif"
                  alt="WattBot Animation"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="h-auto md:h-[168.47px] flex-col justify-center items-center gap-7 inline-flex w-full py-8 md:py-0">
            <div className="text-center text-amber-400 text-3xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-wider">
              Follow Us
            </div>
            <div className="flex justify-center items-center gap-4 md:gap-[61.71px] px-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[60px] h-[60px] md:w-[106.47px] md:h-[106.47px] relative overflow-hidden hover:opacity-80 transition-opacity"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section - Temporarily disabled
          <div className="space-y-7 text-center">
            <h2 className="text-amber-400 text-3xl md:text-5xl font-black font-lexend leading-[1.2] md:leading-[56px] tracking-[0.03em]">
              Newsletter
            </h2>
            <h3 className="text-[#d1d0c5] text-2xl md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em]">
              Stay on top of all things WattBot.
            </h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                console.log("Form submitted");
                const form = e.target as HTMLFormElement;
                const email = (
                  form.elements.namedItem("email") as HTMLInputElement
                ).value;
                console.log("Email value:", email);
                if (email) {
                  try {
                    console.log("Attempting to subscribe with email:", email);
                    const success = await subscribeToNewsletter(email);
                    console.log("Subscription result:", success);
                    if (success) {
                      setIsSubmitted(true);
                      form.reset();
                    } else {
                      console.error("Subscription failed");
                      alert("Failed to subscribe. Please try again.");
                    }
                  } catch (error) {
                    console.error("Newsletter error:", error);
                    alert("An error occurred. Please try again.");
                  }
                }
              }}
              className="flex justify-center px-4"
            >
              <div className="w-full max-w-[845px] bg-[#323437] rounded-[13.41px] flex flex-col md:flex-row items-center gap-4 md:gap-0 p-6 md:p-8 relative">
                <div className="relative flex-1 w-full">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="bg-transparent border-none text-2xl md:text-[35.09px] font-normal font-lexend leading-[1.2] md:leading-[46.78px] tracking-[0.03em] text-white placeholder:text-[#646669] h-auto p-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full text-center md:text-left"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onInvalid={(e) => {
                      e.currentTarget.setCustomValidity("Not a valid email");
                      e.currentTarget.reportValidity();
                    }}
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    required
                  />
                </div>
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <MotionDiv
                      key="button"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        type="submit"
                        className="bg-[#C52159] hover:bg-[#C52159]/90 text-white font-black font-['Lexend Deca'] text-2xl md:text-[33.52px] px-6 md:px-8 py-2 md:py-3 rounded-[13.41px] h-auto w-auto whitespace-nowrap"
                      >
                        SIGN UP
                      </Button>
                    </MotionDiv>
                  ) : (
                    <MotionDiv
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#d1d0c5] text-2xl md:text-[33.52px] font-normal font-lexend whitespace-nowrap"
                    >
                      👍🏼 check email
                    </MotionDiv>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
          */}
        </div>
      </div>
    </MotionDiv>
  );
};

export default Home;
