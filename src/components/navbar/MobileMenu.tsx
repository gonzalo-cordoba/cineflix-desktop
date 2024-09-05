import { Button } from "../ui/button";
import { MenuIcon, XIcon, ChevronRightIcon } from "lucide-react";
import { DropdownNavBar } from "../component/dropdown-nav-bar";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "../../../public/logo.png";

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
    </>
  );
}
