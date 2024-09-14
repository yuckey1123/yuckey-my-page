"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
