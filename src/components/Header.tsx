import NavLinks from "./NavLinks";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="m-auto flex items-center justify-between gap-6 border-b border-gray-800 px-8 py-6 lg:px-32">
      <section className="w-8 h-8 ring-2 ring-gray-200 font-mono rounded-full flex justify-center items-center font-semibold text-xl text-gray-200">
        KD
      </section>
      <Navbar />
      <button
        className="h-10 w-10 bg-amber-600 lg:hidden"
        area-label="Abre menu"
        onClick={toggleMenu}
      ></button>
      {isMenuOpen && (
        <ul
          className={cn(
            "absolute top-24 left-0 flex h-[calc(100vh-6rem)] w-full flex-col items-center bg-[rgb(10,10,10)]/95 backdrop-blur-md p-0 text-lg text-gray-200/70 lg:hidden transition-all duration-200",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <NavLinks />
        </ul>
      )}
    </header>
  );
}
