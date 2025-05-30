"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import Logo from "./logo";
import NavigationLinks from "./navigation-links";
import UserDropDownMenu from "./user-drop-down-menu";
import MobileMenuButton from "./mobile-menu-button";
import { useState } from "react";
import { navItems } from "@/data";
export function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-800/50 to-primary/30 backdrop-blur-sm border-b border-teal-600/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavigationLinks />

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <UserDropDownMenu />

            {/* Mobile menu button */}
            <MobileMenuButton menuOpen={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-teal-600/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-primary font-bold text-sm uppercase tracking-wide transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
