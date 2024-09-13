import { Metadata } from "next";
import React from "react";

const PostsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export const metadata: Metadata = {
  title: "Posts | yuckey-net",
  description: "",
};

export default PostsLayout;
