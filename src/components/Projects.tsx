import Container from "./Container";

const projects = [
  {
    image: "",
    title: "",
    description: "",
    demoUrl: "",
    githubUrl: "",
    stack: ["TypeScript", "React"],
  },
];

export default function Projects() {
  return (
    <Container id="projects">
      <section>
        <h2 className="mb-8 text-center text-3xl text-gray-200">Projetos</h2>
        <section className="flex justify-center gap-4"></section>
      </section>
    </Container>
  );
}
