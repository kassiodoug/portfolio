const links = [
  { name: "Início", href: "/" },
  { name: "Sobre mim", href: "#aboutme" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name} className="w-full lg:w-fit">
            <a
              href={link.href}
              className="block w-full px-9 py-3 transition-all hover:text-gray-200 lg:inline lg:w-fit lg:px-0"
            >
              {link.name}
            </a>
          </li>
        );
      })}
    </>
  );
}
