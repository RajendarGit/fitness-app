"use client"

import Link from "next/link"
import { useAppSelector, useAppDispatch } from "@/hooks/redux"
import { logout } from "@/store/slices/authSlice"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Dumbbell, User, LogOut, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function Navbar() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
  }

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/classes", label: "CLASSES" },
    { href: "/trainers", label: "TRAINERS" },
    { href: "/about", label: "ABOUT US" },
    { href: "/contact", label: "CONTACT US" },
  ]

  return (
    <nav className="bg-teal-800/95 backdrop-blur-sm border-b border-teal-600/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-black text-white uppercase tracking-wider">Booster Power</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-orange-500 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="border-teal-500 text-white hover:bg-teal-700">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-teal-800 border-teal-600">
                  <DropdownMenuItem disabled className="text-white">
                    {user?.name || user?.email}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-white hover:bg-teal-700">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Button
                  variant="outline"
                  asChild
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <Link href="/login">LOGIN</Link>
                </Button>
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase">
                  <Link href="/register">REGISTER</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-teal-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
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
                  className="text-white hover:text-orange-500 font-bold text-sm uppercase tracking-wide transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {!isAuthenticated && (
                <div className="flex flex-col space-y-2 pt-4">
                  <Button
                    variant="outline"
                    asChild
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    <Link href="/login">LOGIN</Link>
                  </Button>
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase">
                    <Link href="/register">REGISTER</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
