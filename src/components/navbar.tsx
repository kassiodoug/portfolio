import NavLinks from "./nav-links";

export default function Navbar() {
  return (
    <nav>
      <ul className="hidden items-center gap-6 text-base text-gray-400 transition-all delay-700 duration-700 lg:flex">
        <NavLinks />
      </ul>
    </nav>
  );
}
