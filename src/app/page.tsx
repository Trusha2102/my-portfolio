import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import ProjectsComponent from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";
import Connect
  from "@/components/Connect/Connect";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <ProjectsComponent />
      <Skills />
      <Connect />
    </>
  );
}
