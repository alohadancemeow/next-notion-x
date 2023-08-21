"use client";

import dynamic from "next/dynamic";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import { notFound } from "next/navigation";

import useGetTweetId from "@/hooks/useGetTweetId";

// # Expensive components
const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);

const Tweet = dynamic(() => import("./TweetBox"));

type Props = {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
};

const Content = ({ recordMap, rootPageId }: Props) => {
  const { tweetId } = useGetTweetId({ recordMap });

  // console.log(recordMap.block, "recordMap");

  const myTweet = () => tweetId && <Tweet id={tweetId} />;

  if (!recordMap) return notFound();

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      // darkMode={true}
      // footer={<button onClick={() => router.push("/")}>back</button>}
      // header={<>header</>}
      disableHeader
      // pageAside={<>aside</>}
      // showTableOfContents
      // pageCover={<></>}
    //   pageTitle
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
        Tweet: myTweet,
      }}
      // className={`
      // w-full
      // prose-ol:m-0 
      // prose-ul:m-0 
      // prose-li:m-0 
      // prose 
      // dark:prose-invert 
      // prose-a:no-underline 
      // prose-img:m-0
      // dark:prose-blockquote:border-brown-700
      // dark:[&>div>a>div>*]:text-white
      // dark:[&>div>a>div>div>*]:text-gray-500
      // dark:prose-a:border-brown-700
      // `}
    />
  );
};

export default Content;
