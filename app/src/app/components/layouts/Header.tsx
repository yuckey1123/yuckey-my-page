import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/posts", label: "Posts" },
  ];

  return (
    <header className="bg-slate-50 p-6">
      <ul className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
