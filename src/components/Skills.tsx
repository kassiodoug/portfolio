import Container from "./Container";
import Card from "./ui/Card";

const skills = [
  { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "React", url: "https://react.dev/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Astro", url: "https://astro.build/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { name: "Material UI", url: "https://mui.com/" },
  { name: "Hero UI", url: "https://www.heroui.com/" },
  { name: "Styled Components", url: "https://styled-components.com/" },
  { name: "Bootstrap", url: "https://getbootstrap.com/" },
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "Express", url: "https://expressjs.com/" },
  { name: "MySQL", url: "https://www.mysql.com/" },
  { name: "PostgreSQL", url: "https://www.postgresql.org/" },
  { name: "Prisma", url: "https://www.prisma.io/" },
  { name: "Sequelize", url: "https://sequelize.org/" },
  { name: "Git", url: "https://git-scm.com/" },
  { name: "GitHub", url: "https://github.com/" },
  { name: "PHP", url: "https://www.php.net/" },
  { name: "Laravel", url: "https://laravel.com/" },
  { name: "Python", url: "https://www.python.org/" },
  { name: "Docker", url: "https://www.docker.com/" },
];

export default function Skills() {
  return (
    <Container id="skills">
      <h2 className="mb-8 text-center text-3xl text-gray-200">Skills</h2>
      <section className="flex justify-center gap-4 max-w-5xl flex-wrap mx-auto">
        {skills.map((skill, index) => (
          <Card
            className="p-0 flex-1 border-b-2 bg-blue-300/5 hover:-translate-y-1 transition-all duration-200"
            key={index}
          >
            <a
              href={skill.url}
              target="_blank"
              className="whitespace-nowrap p-4 text-gray-300 text-center"
            >
              {skill.name}
            </a>
          </Card>
        ))}
      </section>
    </Container>
  );
}
