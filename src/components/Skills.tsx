import Container from "./Container";
import Card from "./ui/Card";

const skills = [
  "HTML",
  "CSS",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Astro",
  "Tailwind CSS",
  "Material UI",
  "Hero UI",
  "Styled Components",
  "Bootstrap",
  "Node.js",
  "Express",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "Sequelize",
  "Git",
  "GitHub",
  "PHP",
  "Laravel",
  "Python",
  "Docker",
];

export default function Skills() {
  return (
    <Container id="skills">
      <h2 className="mb-8 text-center text-3xl text-gray-200">Skills</h2>
      <section className="flex justify-center gap-4 max-w-5xl flex-wrap mx-auto">
        {skills.map((skill, index) => (
          <Card
            className="p-4 flex-1 border-b-2 bg-blue-300/5 hover:-translate-y-1 transition-all duration-200"
            key={index}
          >
            <span className="whitespace-nowrap text-gray-300 text-center">
              {skill}
            </span>
          </Card>
        ))}
      </section>
    </Container>
  );
}
