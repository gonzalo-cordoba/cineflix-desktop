"use client";

// Hooks
import { useState } from "react";
import { useDropdown } from "@/hooks/useDropdown";
import { useFirebaseLogin } from "@/hooks/useFirebaseLogin";
import { useSession, signOut } from "next-auth/react";

// Importaciones de Next
import Link from "next/link";
import Image from "next/image";

// Componentes
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { DropdownNavBar } from "./dropdown-nav-bar";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  User2Icon,
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
import { Button } from "../ui/button";
import DropdownWithTabs from "../DropdownWithTabs";
import CandyDropdown from "../CandyWithTabs";
import PromosWithTabs from "../PromosWithTabs";

// Logos e iconos
import defaultImage from "../../../public/logo.png";
import { MenuIcon } from "../navbar/MenuIcon";

export function Navbar() {
  const {
    dropdownContent,
    isDropdownHovered,
    setIsDropdownHovered,
    dropdownRef,
    handleMouseEnter,
    handleMouseLeaveDropdown,
  } = useDropdown();
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const { user } = useFirebaseLogin();
  const { data: session } = useSession();

  const userName =
    session?.user?.name ||
    user?.displayName ||
    session?.user?.email ||
    "Usuario";
  const userImage =
    typeof session?.user?.image === "string"
      ? session.user.image
      : user?.photoURL || defaultImage;

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
              onMouseEnter={() => handleMouseEnter(<DropdownWithTabs />)}
              className="text-md font-extrabold hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors text-white"
              prefetch={false}
              style={{ color: "#F2EBFB" }}
            >
              Peliculas
            </Link>
            <Link
              href="#"
              onMouseEnter={() => handleMouseEnter(<CandyDropdown />)}
              className="text-md font-extrabold text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors"
              prefetch={false}
              style={{ color: "#F2EBFB" }}
            >
              Candy
            </Link>
            <Link
              href="#"
              onMouseEnter={() => handleMouseEnter(<PromosWithTabs />)}
              className="text-md font-extrabold text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors"
              prefetch={false}
              style={{ color: "#F2EBFB" }}
            >
              Promos
            </Link>
          </div>
        </div>
        <Link
          href="/"
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
            <MagnifyingGlassIcon className="h-7 w-7 text-black" />
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

          {session?.user ? (
            <div className="flex items-center space-x-4">
              <Image
                src={userImage}
                alt="Imagen usuario"
                className="w-10 h-10 rounded-full cursor-pointer"
                style={{ borderRadius: "50%" }}
                width={96}
                height={96}
                priority
              />
              <span className="text-sm">{userName}</span>
              <button
                onClick={async () => {
                  await signOut({
                    callbackUrl: "/",
                  });
                }}
                className="text-md font-extrabold"
                style={{
                  color: "white",
                }}
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <Link
              href="dashboard/user"
              className="text-md font-extrabold"
              style={{ color: "white" }}
            >
              <User2Icon />
            </Link>
          )}
        </div>
      </div>
      {dropdownContent && (
        <div
          ref={dropdownRef}
          onMouseEnter={() => setIsDropdownHovered(true)}
          onMouseLeave={() => {
            setIsDropdownHovered(false);
            handleMouseLeaveDropdown();
          }}
          className="absolute left-0 right-0 mt-2 p-4 bg-white shadow-md z-50"
        >
          {dropdownContent}
        </div>
      )}
    </header>
  );
}
