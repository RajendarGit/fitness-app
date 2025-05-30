import { Dumbbell } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <Dumbbell className="h-8 w-8 text-primary" />
      <span className="text-2xl font-black uppercase tracking-wider bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
        Power Gym
      </span>
    </Link>
  );
};

export default Logo;
