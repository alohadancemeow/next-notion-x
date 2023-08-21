import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="relative w-full">
      <div>{children}</div>
      <Link className="flex items-center justify-center my-5" href={"/posts"}>
        Back to posts
      </Link>
    </div>
  );
};

export default layout;
