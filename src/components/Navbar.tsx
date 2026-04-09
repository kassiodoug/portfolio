import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav>
      <ul className="hidden items-center gap-6 text-base text-gray-200/70 transition-all lg:flex">
        <NavLinks />
      </ul>
    </nav>
  );
}
