import { Button } from "../ui/button";
import { MenuIcon, XIcon, ChevronRightIcon } from "lucide-react";
import { DropdownNavBar } from "../component/dropdown-nav-bar";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "../../../public/logo.png";

import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenuClick: (menuItem: any) => void;
}

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  handleMenuClick,
}: MobileMenuProps) {
  return (
    <>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4 }}
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

            <Link href="/">
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
            </Link>

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
              href="/"
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
              onClick={() => setIsMenuOpen(false)}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
