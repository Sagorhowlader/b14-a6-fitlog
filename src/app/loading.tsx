import React from "react";

const Loading = () => {
  return (
    <div className="max-h-1/2 w-full flex flex-col items-center justify-center">
      <span className="loading loading-spinner loading-xl"></span>
      <div className="skeleton w-full"></div>
    </div>
  );
};

export default Loading;
