import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center bg-slate-50 p-6">
      <li>
        <Link href="/">Top</Link>
      </li>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/posts">Post</Link>
      </li>
    </header>
  );
};

export default Header;
