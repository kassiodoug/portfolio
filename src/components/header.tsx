import { useState } from "react";
import Navbar from "./navbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="m-auto flex items-center justify-between gap-6 border-b border-gray-800 px-8 py-6 md:px-32">
      <section className="h-10 w-10 bg-amber-600"></section>
      <Navbar />
      <button
        className="h-10 w-10 bg-amber-600 md:hidden"
        onClick={toggleMenu}
      ></button>
      {isMenuOpen && (
        <ul
          className={`absolute top-20 left-0 flex w-full transform flex-col items-center bg-amber-500 p-0 text-lg font-semibold transition-transform delay-700 md:hidden ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="w-full px-6 py-2">
            <a
              className="w-full p-3 transition-all hover:text-slate-400"
              href="#"
            >
              Início
            </a>
          </li>
          <li className="w-full px-6 py-2">
            <a
              className="w-full p-3 transition-all hover:text-slate-400"
              href="#"
            >
              Sobre
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
