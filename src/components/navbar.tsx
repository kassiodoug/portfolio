export default function Navbar() {
  return (
    <nav>
      <ul className="hidden items-center gap-6 text-base font-semibold transition-all delay-700 duration-700 md:flex">
        <li>
          <a className="p-3 transition-all hover:text-slate-400" href="#">
            Início
          </a>
        </li>
        <li>
          <a className="p-3 transition-all hover:text-slate-400" href="#">
            Sobre mim
          </a>
        </li>
        <li>
          <a className="p-3 transition-all hover:text-slate-400" href="#">
            Projetos
          </a>
        </li>
      </ul>
    </nav>
  );
}
