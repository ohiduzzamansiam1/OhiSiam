"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const pageLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "GuestBook",
    href: "/guestbook",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <nav className="py-4 sm:py-8 md:py-16 flex items-center justify-between">
      <Link
        href="/"
        className="text-3xl sm:text-4xl font-extrabold cursor-pointer select-none"
        title="This website is build by Siam"
      >
        Ohi<span className="text-primary">Siam</span>
      </Link>

      {/* Menu for Non-Mobile */}
      <div className="hidden sm:flex items-center gap-5 font-medium text-gray-700 sm:text-lg">
        {pageLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={`transition duration-150 ${
              pathname === link.href ? "text-primary" : "hover:text-primary/80"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Menu for mobile devices */}
      <div className="sm:hidden">
        <Sheet
          open={modalOpen}
          onOpenChange={() => {
            setModalOpen(!modalOpen);
          }}
        >
          <SheetTrigger asChild>
            <Button variant="link">
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-center items-center">
            <div className="z-10 flex flex-col items-center text-xl font-bold gap-2">
              {pageLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className={`${pathname === link.href ? "text-primary" : ""}`}
                  onClick={() => {
                    setModalOpen(link.href == pathname);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="h-full w-full select-none absolute flex items-end justify-center pb-3">
              <p className="border-t pt-3 font-semibold">
                Built with 💝 by <span className="text-primary">Siam.</span>
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
