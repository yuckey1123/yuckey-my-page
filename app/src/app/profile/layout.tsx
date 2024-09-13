import { Metadata } from "next";
import React from "react";

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export const metadata: Metadata = {
  title: "Profile | yuckey-net",
  description: "",
};

export default ProfileLayout;
