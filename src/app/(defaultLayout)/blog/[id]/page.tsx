import ReadBlog from "@/components/Mainlayout/Blog/ReadBlog";
import { getBlogPost } from "@/src/data/blogs";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) notFound();

  return <ReadBlog post={post} />;
};

export default page;
