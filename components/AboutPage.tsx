"use client";

import Link from "next/link";
import AboutContent from "./about-content.mdx";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="flex my-20 flex-col justify-center items-center gap-4 m-auto mx-4 prose md:mx-auto">
      <AboutContent />
      <Link className="flex items-center justify-center my-5" href={"/"}>
        Back to home
      </Link>
    </div>
  );
};

export default AboutPage;
