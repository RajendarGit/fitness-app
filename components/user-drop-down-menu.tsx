import { LogOut } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import { logout } from "@/store/slices/authSlice";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import Link from "next/link";
const UserDropDownMenu = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-teal-500 text-white hover:bg-teal-700"
            >
              <User className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-teal-800 border-teal-600"
          >
            <DropdownMenuItem disabled className="text-white">
              {user?.name || user?.email}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-white hover:bg-teal-700"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
            size="sm"
            variant="ghost"
            asChild
            className="border-primary text-white hover:bg-primary/10 hover:text-teal-700"
          >
            <Link href="/login">LOGIN</Link>
          </Button>
      )}
    </>
  );
};

export default UserDropDownMenu;
