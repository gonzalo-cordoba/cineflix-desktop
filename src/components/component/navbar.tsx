"use client";

import { useEffect, useState } from "react";
import { useDropdown } from "@/hooks/useDropdown";
import { useFirebaseLogin } from "@/hooks/useFirebaseLogin";
import { useSession, signOut } from "next-auth/react";

import Link from "next/link";
import Image from "next/image";

import DropdownWithTabs from "../DropdownWithTabs";
import CandyDropdown from "../CandyWithTabs";
import PromosWithTabs from "../PromosWithTabs";

import MobileMenu from "../navbar/MobileMenu";
import DesktopMenu from "../navbar/DesktopMenu";

import defaultImage from "../../../public/logo.png";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { User2Icon } from "lucide-react";
import * as motion from "framer-motion/client";

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
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          handleMenuClick={handleMenuClick}
        />

        <DesktopMenu handleMenuClick={handleMenuClick} />

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

        <div className="flex items-center space-x-4">
          <button onClick={toggleCommand} className="focus:outline-none">
            <MagnifyingGlassIcon
              style={{ color: "white" }}
              className="h-6 w-6"
            />
          </button>

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
              <span style={{ color: "white" }} className="text-sm">
                {userName}
              </span>
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
