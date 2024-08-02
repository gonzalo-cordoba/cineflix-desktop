import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="bg-[#9667E0] px-4 py-3 md:px-6 md:py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold text-white"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </nav>
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:bg-[#7b4dc4] hover:text-white px-4 py-2 rounded-md transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props) {
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

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
