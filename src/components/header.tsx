import { useState } from "react";
import Navbar from "./navbar";
import NavLinks from "./nav-links";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="m-auto flex items-center justify-between gap-6 border-b border-gray-800 px-8 py-6 lg:px-32">
      <section className="h-10 w-10 bg-amber-600"></section>
      <Navbar />
      <button
        className="h-10 w-10 bg-amber-600 lg:hidden"
        onClick={toggleMenu}
      ></button>
      {isMenuOpen && (
        <ul className="absolute top-24 left-0 flex h-[calc(100vh-6rem)] w-full flex-col items-center bg-[rgb(10,10,10)] p-0 text-lg text-gray-400 lg:hidden">
          <NavLinks />
        </ul>
      )}
    </header>
  );
}
