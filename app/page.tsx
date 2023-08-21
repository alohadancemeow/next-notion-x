import Link from "next/link";
import { getDatabase } from "@/lib/notion";

export default async function Home() {
  const posts = await getDatabase();
  // console.log(posts, "posts");

  return (
    <main className="flex flex-col justify-start p-24 m-auto prose">
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </main>
  );
}
