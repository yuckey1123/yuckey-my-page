import { Metadata } from "next";
import React from "react";

import { getPost } from "@/lib/posts";

const PostsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

// 動的なメタデータを生成する
export const generateMetadata = ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const { title, content, thumbnail } = getPost(params.slug);
  return {
    title: title + " | yuckey-net",
    description: content,
    openGraph: {
      title: title + " | yuckey-net",
      description: content,
      images: [process.env.VERCEL_URL + (thumbnail ?? "/noimage.png")],
    },
    twitter: {
      title: title + " | yuckey-net",
      description: content,
      images: [process.env.VERCEL_URL + (thumbnail ?? "/noimage.png")],
    },
  };
};

export default PostsLayout;
