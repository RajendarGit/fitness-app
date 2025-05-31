import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ViewAll = ({ href }: { href: string }) => {
  return (
    <Link className="btn-theme flex items-center gap-2" href={href}>
      VIEW ALL
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
};

export default ViewAll;
