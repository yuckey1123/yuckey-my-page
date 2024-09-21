import Link from "next/link";
import React from "react";

import { getAllPosts } from "@/lib/posts";

const getPosts = () => {
  const posts = getAllPosts();
  return posts
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

const Posts: React.FC = () => {
  const posts = getPosts();
  return (
    <div className="my-8 bg-white">
      <h1 className="text-2xl font-bold">Posts</h1>
      <div className="grid grid-cols-3">
        {posts.map((post) => (
          <div className="p-4" key={post.slug}>
            <h2 className="text-lg font-bold">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
