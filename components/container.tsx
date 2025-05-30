import React from "react";

const Container = ({ children, className="" }: { children: React.ReactNode, className?: string }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default Container;