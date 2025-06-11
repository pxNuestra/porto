import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <nav
      className={`w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center py-3 sm:py-5 px-3 sm:px-6 fixed top-2 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md rounded-lg ${
        theme === "dark"
          ? "bg-[#121212]/90 text-white"
          : "bg-[#fff] text-black border border-gray-300"
      }`}
    >
      <div className="flex gap-4 sm:gap-8 text-base sm:text-lg font-medium mb-2 sm:mb-0">
        <Link href="/" className="font-bold hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
      </div>
      <button
        className="text-lg hover:opacity-80 transition-opacity"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <SunIcon className="h-6 w-6 text-yellow-400" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-800" />
        )}
      </button>
    </nav>
  );
}