import { getPageContent } from "@/lib/notion";
import Content from "@/components/Content";

type Props = {
  params: {
    slug: string;
  };
};

const Post = async ({ params }: Props) => {
  const slug = params.slug;
  const recordMap = await getPageContent(slug);

  return <Content recordMap={recordMap} />;
};

export default Post;
