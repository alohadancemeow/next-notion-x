import { getDatabase } from "@/lib/notion";
import Link from "next/link";

type Props = {};

const Posts = async (props: Props) => {
  const posts = await getDatabase();
  console.log(posts, "posts");
  return (
    <div className="flex flex-col justify-start p-24 m-auto prose">
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`post/${post.id}`}>
              {post?.icon?.emoji + post?.properties?.Name?.title[0]?.plain_text}
            </Link>
          </li>
        ))}
      </ul>
      <Link className="flex items-center justify-center my-5" href={"/"}>
        Back to home
      </Link>
    </div>
  );
};

export default Posts;
