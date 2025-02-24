import React from "react";
import BlogLayout from "@/components/layouts/BlogLayout";
import { blog } from "@/styles/blog";
import { Button } from "@/components/ui/button";
import { EXTERNAL_URLS } from "@/lib/constants";

const Blog = () => {
  return (
    <BlogLayout>
      <article>
        <h1 className={blog.title}>WattBot Beta Program</h1>

        <p className={blog.p}>
          We're excited to announce the WattBot Beta Program for select
          residential solar installers. As America's Best Solar Calculator,
          we're looking for partners who want to shape the future of solar sales
          and customer education.
        </p>

        <h2 className={blog.h2}>What's Included</h2>
        <ul className={blog.ul}>
          <li className={blog.li}>Early access to new features</li>
          <li className={blog.li}>Direct influence on product development</li>
          <li className={blog.li}>
            Priority support and implementation assistance
          </li>
          <li className={blog.li}>Special beta pricing</li>
        </ul>

        <h2 className={blog.h2}>Who Should Apply</h2>
        <p className={blog.p}>
          We're looking for residential solar installers who:
        </p>
        <ul className={blog.ul}>
          <li className={blog.li}>Install 10+ residential systems monthly</li>
          <li className={blog.li}>Have a dedicated sales team</li>
          <li className={blog.li}>Are committed to customer education</li>
          <li className={blog.li}>
            Want to help shape the future of solar sales
          </li>
        </ul>

        <h2 className={blog.h2}>How to Join</h2>
        <p className={blog.p}>
          Spots in our beta program are limited. Schedule a call with our team
          to learn more and see if you qualify.
        </p>

        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => window.open(EXTERNAL_URLS.CALENDAR_DEMO, "_blank")}
            className="bg-[#000000] hover:bg-[#000000]/90 text-[#FBBF24] text-xl md:text-2xl font-black font-lexend px-8 py-4 rounded-[13.41px] h-auto"
          >
            SCHEDULE A CALL
          </Button>
        </div>
      </article>
    </BlogLayout>
  );
};

export default Blog;
