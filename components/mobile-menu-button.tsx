import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
const MobileMenuButton = ({ menuOpen }: { menuOpen: () => void }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden text-white hover:bg-teal-700"
      onClick={menuOpen}
    >
      <Menu className="h-6 w-6" />
    </Button>
  );
};

export default MobileMenuButton;
