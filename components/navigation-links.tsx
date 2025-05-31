import { navItems } from "@/data";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/hooks/redux";

const NavigationLinks = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const filteredNavItems = navItems.filter(
    (item) =>
      item.label !== "WORKOUT PLAN" || (item.label === "WORKOUT PLAN" && isAuthenticated)
  );
  return (
    <div className="hidden md:flex items-center space-x-8">
      {filteredNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-white hover:text-teal-700 font-bold text-sm uppercase tracking-wide transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinks;
