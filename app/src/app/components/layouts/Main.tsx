import React from "react";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="bg-slate-50 p-6">{children}</main>;
};

export default Main;
