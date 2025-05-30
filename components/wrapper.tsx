import React from "react";

const Wrapper = ({ children, className="" }: { children: React.ReactNode, className?: string }) => {
  return <div className={className}>{children}</div>;
};

export default Wrapper;