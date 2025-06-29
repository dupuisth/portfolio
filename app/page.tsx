import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProjectsList from "./components/ProjectsList";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <ProjectsList />

      <Contact />
    </>
  );
}
