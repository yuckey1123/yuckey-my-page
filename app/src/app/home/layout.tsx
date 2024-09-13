import { Metadata } from "next";
import React from "react";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export const metadata: Metadata = {
  title: "yuckey-net",
  description: "",
};

export default HomeLayout;
