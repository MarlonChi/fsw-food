import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex justify-between px-5 pt-6">
      <Link href="/" className="relative h-[30px] w-[100px]">
        <Image src="/fsw-logo.png" alt="FSW Food" fill />
      </Link>
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
