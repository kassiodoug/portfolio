import Container from "./container";
import IconGithub from "./icons/icon-github";

export default function HeroAboutMe() {
  return (
    <Container>
      <section className="flex w-full justify-center gap-10 text-center">
        <section className="space-y-4">
          <span className="w-full text-sm">Bem vindo(a) ao portfólio de</span>
          <h1 className="text-5xl font-semibold text-gray-200">
            Kassio Douglas
          </h1>

          <p>
            Desenvolvedor Full-stack com experiência no desenvolvimento de
            sistemas
          </p>

          <section className="flex justify-center">
            <a href="https://github.com/kassiodoug" target="_blank">
              <IconGithub />
            </a>
          </section>
        </section>
      </section>
    </Container>
  );
}
