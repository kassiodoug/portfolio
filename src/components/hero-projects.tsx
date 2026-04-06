import Container from "./container";

const projects = [
  {
    image: "",
    title: "",
    description: "",
    link: "",
    stack: ["TypeScript", "React"],
  },
];

export default function HeroProjects() {
  return (
    <Container>
      <h2 className="mb-8 text-center text-3xl text-gray-200">Projetos</h2>
      <section className="flex justify-center gap-4"></section>
    </Container>
  );
}
