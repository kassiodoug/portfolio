import finpayPrint from "../assets/images/finpay-landingpage.webp";
import Container from "./Container";
import Card from "./ui/Card";

const projects = [
  {
    image: {
      src: finpayPrint,
      alt: "Imagem demo da landingpage Portpay",
    },
    title: "Portpay - Pagamentos digitais",
    description:
      "A Portpay oferece serviços financeiros digitais focados em pagamentos, gestão financeira e automação de transações.",
    demoUrl: "https://portpay-landingpage.netlify.app/",
    githubUrl: "https://github.com/kassiodoug/landingpage-portpay",
    stack: ["SCSS", "JavaScript", "HTML"],
  },
];

export default function Projects() {
  return (
    <Container id="projects">
      <section>
        <h2 className="mb-8 text-center text-3xl text-gray-200">Projetos</h2>
        <section className="flex justify-center gap-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="max-w-xs relative gap-4 overflow-hidden hover:border-gray-500/90 transition-all duration-200"
            >
              <section className="w-full h-48 absolute left-0 top-0 overflow-hidden">
                <img
                  className="border-none object-cover"
                  src={project.image.src}
                  alt={project.image.alt}
                />
              </section>

              <h3 className="text-xl font-bold text-gray-200 mt-48 ">
                {project.title}
              </h3>

              <section className="flex gap-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="px-4 py-2 cursor-pointer grow rounded-md border hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  Ver demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="px-4  py-2 cursor-pointer grow rounded-md border hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  Github
                </a>
              </section>

              <section className="flex gap-1 flex-wrap">
                {project.stack.map((stack, i) => (
                  <Card key={i} className="flex px-2 py-1 w-fit text-xs">
                    {stack}
                  </Card>
                ))}
              </section>

              <p className="text-justify text-clip">{project.description}</p>
            </Card>
          ))}

          <Card className="max-w-xs relative gap-4 overflow-hidden hover:border-gray-500/90 transition-all duration-200 text-center flex justify-center h-96">
            <h3 className="text-xl font-bold">Em breve mais...</h3>
            <p>Estou organizando os projetos para postar aqui.</p>
          </Card>
        </section>
      </section>
    </Container>
  );
}
