"use client";
import React from "react";

import Home from "./home/page";

type Props = {
  message: string;
  children: React.ReactNode;
};
type Item = {
  id: number;
  message: string;
};

const App: React.FC = () => {
  const message: string = "Hello, World!";
  const items: Item[] = [
    { id: 1, message: "Hello, World!1" },
    { id: 3, message: "Hello, World!3" },
  ];

  return (
    <>
      <div className="app">
        <Home />
        <h1>{message}</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.message}</li>
          ))}
        </ul>
        <Child message="BBBBBYYYYY">BBCC</Child>
      </div>
    </>
  );
};

const Child: React.FC<Props> = ({ message, children }) => {
  return (
    <div className="child">
      <h1>{message}</h1>
      <p>{children}</p>
    </div>
  );
};

export default App;
