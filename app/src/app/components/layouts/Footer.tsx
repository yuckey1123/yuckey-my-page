import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <Link href="/privacy-policy">Privacy Policy</Link>
      <div className="max-w-4xl w-full mx-auto h-24 flex items-center justify-center">
        <Link href="/">© yuckey-net</Link>
      </div>
    </footer>
  );
};

export default Footer;
