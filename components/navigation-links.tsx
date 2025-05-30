import { navItems } from "@/data";
import Link from "next/link";
import React from "react";

const NavigationLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-white hover:text-primary font-bold text-sm uppercase tracking-wide transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinks;
