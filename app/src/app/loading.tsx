import React from "react";

const Loading: React.FC = () => {
  const message: string = "Loading";
  return (
    <div className="app">
      <h1>{message}</h1>
    </div>
  );
};

export default Loading;
