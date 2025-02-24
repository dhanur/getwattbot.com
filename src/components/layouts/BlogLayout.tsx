import React from "react";
import Header from "../Header";
import { typography } from "@/styles/typography";

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-[#FBBF24] font-lexend">
      <Header />
      <main className="max-w-[780px] mx-auto px-4 md:px-8 py-24 md:py-32">
        {children}
      </main>
    </div>
  );
};

export default BlogLayout;
