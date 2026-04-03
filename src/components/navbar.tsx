export default function Navbar() {
  return (
    <nav>
      <ul className="hidden items-center gap-6 text-base text-gray-400 transition-all delay-700 duration-700 md:flex">
        <li>
          <a className="p-3 transition-all hover:text-gray-200" href="#">
            Início
          </a>
        </li>
        <li>
          <a className="p-3 transition-all hover:text-gray-200" href="#">
            Sobre mim
          </a>
        </li>
        <li>
          <a className="p-3 transition-all hover:text-gray-200" href="#">
            Projetos
          </a>
        </li>
      </ul>
    </nav>
  );
}
