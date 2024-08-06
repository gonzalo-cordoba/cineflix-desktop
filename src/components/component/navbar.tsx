"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { DropdownNavBar } from "./dropdown-nav-bar";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function Navbar() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const toggleCommand = () => {
    setIsCommandOpen(!isCommandOpen);
  };

  return (
    <header className="bg-[#9667E0] px-4 py-3 md:px-6 md:py-4">
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="flex flex-grow items-center gap-6 justify-start">
          <nav className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </nav>
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="#"
              className="text-md font-extrabold hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors text-white"
              prefetch={false}
              style={{ color: "#F2EBFB" }}
            >
              Peliculas
            </Link>
            <Link
              href="#"
              className="text-md font-extrabold text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors"
              prefetch={false}
              style={{ color: "#F2EBFB" }}
            >
              Candy
            </Link>
            <Link
              href="#"
              className="text-md font-extrabold text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors"
              prefetch={false}
              style={{ color: "#F2EBFB" }}
            >
              Promos
            </Link>
          </div>
        </div>
        <Link
          href="#"
          className="absolute left-1/2 transform -translate-x-1/2 text-md font-extrabold text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center"
          prefetch={false}
        >
          <Image
            src="/logo.png"
            alt="Cineflix"
            width={60}
            height={60}
            priority
          />
          <span className="sr-only">Cineflix</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-6 justify-end bg-white bg-opacity-80 rounded-lg px-3 py-2"
          style={{ color: "white" }}
        >
          <DropdownNavBar />
        </Link>
        <div
          className="relative flex items-center gap-6 justify-end bg-white bg-opacity-80 rounded-lg px-3 py-2"
          style={{ color: "white" }}
        >
          <button
            onClick={toggleCommand}
            className="flex items-center gap-6 justify-end bg-white bg-opacity-80 rounded-lg px-3 py-2 hover:bg-[#7b4dc4] hover:text-white"
            aria-expanded={isCommandOpen}
          >
            <MagnifyingGlassIcon className="h-8 w-8 text-black" />
          </button>
          {isCommandOpen && (
            <Command className="absolute top-full right-0 mt-2 w-80 rounded-lg border shadow-md bg-[#9667E0] text-white z-50">
              <CommandInput
                placeholder="Buscar.."
                className="bg-[#9667E0] text-white font-semibold"
              />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem disabled>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          )}
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
