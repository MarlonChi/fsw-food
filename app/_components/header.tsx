import Image from "next/image";
import { MenuIcon } from "lucide-react";

import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex justify-between px-5 pt-6">
      <Image src="/fsw-logo.png" alt="FSW Food" height={30} width={120} />
      <Button
        size="icon"
        variant="secondary"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </header>
  );
};

export default Header;
