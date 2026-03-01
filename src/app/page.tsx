import {
  Hero,
  Manifesto,
  ProjectCarousel,
  GameGrid,
  SecondaryProjectGrid,
  Contact,
  Footer,
} from "@/components";
import { projects } from "@/data/projects";
import { games } from "@/data/games";
import { secondaryProjects } from "@/data/secondaryProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <ProjectCarousel id="projetos" title="Projetos" projects={projects} />
      <GameGrid id="jogos" title="Jogos" games={games} />
      <SecondaryProjectGrid
        id="outros-projetos"
        title="Outros Projetos"
        projects={secondaryProjects}
      />
      <Contact />
      <Footer />
    </main>
  );
}
