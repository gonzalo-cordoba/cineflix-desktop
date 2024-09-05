"use client";

// Hooks
import { useEffect, useState } from "react";
import { useDropdown } from "@/hooks/useDropdown";
import { useFirebaseLogin } from "@/hooks/useFirebaseLogin";
import { useSession, signOut } from "next-auth/react";

// Importaciones de Next
import Link from "next/link";
import Image from "next/image";

// Componentes
import { ChevronRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { DropdownNavBar } from "./dropdown-nav-bar";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  User2Icon,
  XIcon,
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

// Logos e iconos
import defaultImage from "../../../public/logo.png";

import { MenuIcon } from "../navbar/MenuIcon";
import DropdownWithTabs from "../DropdownWithTabs";
import CandyDropdown from "../CandyWithTabs";
import PromosWithTabs from "../PromosWithTabs";

export function Navbar() {
  const {
    dropdownContent,
    isDropdownHovered,
    setIsDropdownHovered,
    dropdownRef,
    handleMouseEnter,
    handleMouseLeaveDropdown,
    activeDropdown,
    setActiveDropdown,
    setDropdownContent,
  } = useDropdown();
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // UseEffect para desactivar el scroll del menu hamburguesa
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleMenuClick = (menuItem: any) => {
    switch (menuItem) {
      case "Peliculas":
        setDropdownContent(<DropdownWithTabs />);
        break;
      case "Candy":
        setDropdownContent(<CandyDropdown />);
        break;
      case "Promos":
        setDropdownContent(<PromosWithTabs />);
        break;
      default:
        setDropdownContent(null);
    }
  };

  return (
    <header className="bg-[#9667E0] px-4 py-3 md:px-6 md:py-4">
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="flex flex-grow items-center gap-6 justify-start">
          <nav className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              style={{ color: "white" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
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

        {isMenuOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#240046",
              color: "#F2EBFB",
              zIndex: 50,
              paddingTop: "16px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              width: "100vw",
              height: "100vh",
            }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "#D4BBFC",
                border: "none",
                borderRadius: "5px",
                color: "black",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              <XIcon style={{ height: "24px", width: "24px" }} />
            </button>

            <Image
              src={defaultImage}
              alt="Logo Cineflix Black"
              width={90}
              height={90}
              style={{
                marginBottom: "16px",
                marginTop: "80px",
                maxWidth: "80%",
              }}
            />

            {/* DropdownNavBar dentro del menú hamburguesa */}
            <Link
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                fontSize: "16px",
                color: "#F2EBFB",
                textDecoration: "none",
                width: "100%",
              }}
            >
              <DropdownNavBar />
            </Link>

            <Link
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                fontSize: "16px",
                borderBottom: "1px solid grey",
                color: "#F2EBFB",
                textDecoration: "none",
                width: "100%",
              }}
              onClick={() => handleMenuClick("Peliculas")}
            >
              Películas
              <ChevronRightIcon
                style={{ marginLeft: "auto", height: "16px", width: "16px" }}
              />
            </Link>
            <Link
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                fontSize: "16px",
                borderBottom: "1px solid grey",
                color: "#F2EBFB",
                textDecoration: "none",
                width: "100%",
              }}
              onClick={() => handleMenuClick("Candy")}
            >
              Candy
              <ChevronRightIcon
                style={{ marginLeft: "auto", height: "16px", width: "16px" }}
              />
            </Link>
            <Link
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                fontSize: "16px",
                borderBottom: "1px solid grey",
                color: "#F2EBFB",
                textDecoration: "none",
                width: "100%",
              }}
              onClick={() => handleMenuClick("Promos")}
            >
              Promos
              <ChevronRightIcon
                style={{ marginLeft: "auto", height: "16px", width: "16px" }}
              />
            </Link>
          </div>
        )}

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
          className="hidden md:flex items-center gap-6 justify-end bg-white bg-opacity-80 rounded-lg px-3 py-2"
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
