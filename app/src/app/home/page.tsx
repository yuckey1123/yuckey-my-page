"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="home bg-white">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
