import Link from "next/link";
import * as motion from "framer-motion/client";

interface DesktopMenuProps {
  handleMenuClick: (menuItem: string) => void;
}

export default function DesktopMenu({ handleMenuClick }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex md:items-center md:gap-6">
      <Link
        href="#"
        onClick={() => handleMenuClick("Peliculas")}
        className="text-md font-extrabold hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors text-white"
        prefetch={false}
        style={{ color: "#F2EBFB" }}
      >
        Peliculas
      </Link>
      <Link
        href="#"
        onClick={() => handleMenuClick("Candy")}
        className="text-md font-extrabold text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors"
        prefetch={false}
        style={{ color: "#F2EBFB" }}
      >
        Candy
      </Link>
      <Link
        href="#"
        onClick={() => handleMenuClick("Promos")}
        className="text-md font-extrabold text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors"
        prefetch={false}
        style={{ color: "#F2EBFB" }}
      >
        Promos
      </Link>
    </div>
  );
}
