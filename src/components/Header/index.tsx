import "./styles.scss";

import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

import { About } from "../../pages/About";
import { Experience } from "../../pages/Experience";
import { Projects } from "../../pages/Projects";
import { useState } from "react";

export function Header() {
  const [about, setAbout] = useState(false);
  const [experience, setExperience] = useState(false);
  const [projects, setProjects] = useState(false);

  function handelSetAbout() {
    setAbout(true);
    setExperience(false);
    setProjects(false);
  }

  function handleSetExperience() {
    setAbout(false);
    setExperience(true);
    setProjects(false);
  }

  function handleSetProjects() {
    setAbout(false);
    setExperience(false);
    setProjects(true);
  }
  return (
    <div className="main">
      <div className="header">
        <div className="header_intro">
          <h1>Rafael Ribeiro</h1>
          <h2>Desenvolvedor Frontend e Engenheiro de Software</h2>
          <p>Crio sites responsivos, soluções web e alguns jogos 🎮</p>
        </div>
        <div className="header_menu">
          <button onClick={handelSetAbout}>Sobre</button>
          <button onClick={handleSetExperience}>Experiência</button>
          <button onClick={handleSetProjects}>Projetos</button>
        </div>
        <div className="header_socialMedia">
          <a href="https://www.linkedin.com/in/rafaelribeirodev/">
            <LinkedinLogo size={24} />
          </a>

          <a href="https://github.com/RafahOlive">
            <GithubLogo size={24} />
          </a>
        </div>
      </div>
      <div className="right-side">
        {about && <About />}
        {experience && <Experience />}
        {projects && <Projects />}
      </div>
    </div>
  );
}
