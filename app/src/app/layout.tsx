import "./globals.css";
import { Metadata } from "next";
import React from "react";

import { Main, Header, Footer } from "./components/layouts";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "yuckey-net",
  description: "",
};

export default RootLayout;
