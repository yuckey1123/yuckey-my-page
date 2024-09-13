import { Metadata } from "next";
import React from "react";

const PrivacyPolicyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export const metadata: Metadata = {
  title: "PrivacyPolicy | yuckey-net",
  description: "",
};

export default PrivacyPolicyLayout;
