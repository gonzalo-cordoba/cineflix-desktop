import Link from "next/link";

export default function DesktopMenu() {
  return (
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
  );
}
