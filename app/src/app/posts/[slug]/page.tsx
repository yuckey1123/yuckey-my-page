import Link from "next/link";
import React from "react";

import { getAllPosts, getPost } from "@/lib/posts";

interface PostsProps {
  params: {
    slug: string;
  };
}

const Posts: React.FC<PostsProps> = async ({ params }) => {
  const post = getPost(params.slug);

  return (
    <div className="prose max-w-none">
      <Link href="/posts">Back</Link>

      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm">{post.date}</p>
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const generateStaticParams = async () => {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default Posts;
