import Container from "./Container";
import IconGithub from "./icons/IconGithub";

export default function Hero() {
  return (
    <Container>
      <section className="flex w-full items-center min-h-[calc(100vh/2)] justify-center gap-10 text-center">
        <section className="space-y-4">
          <span className="w-full text-sm">Bem-vindo(a) ao portfólio de</span>
          <h1 className="text-5xl font-semibold animate-fade-in text-gray-200 my-name">
            Kassio Douglas
          </h1>

          <p>
            Desenvolvedor Full-stack com experiência no desenvolvimento de
            sistemas
          </p>

          <section className="flex justify-center">
            <a href="https://github.com/kassiodoug" target="_blank">
              <IconGithub className="fill-gray-100" />
            </a>
          </section>
        </section>
      </section>
    </Container>
  );
}
