import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects";
import Skills from "./components/Skills.tsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
