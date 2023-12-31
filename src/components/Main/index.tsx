import { About } from "../../pages/About";
import { Experience } from "../../pages/Experience";
import { Projects } from "../../pages/Projects";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { SiLinkedin, SiGithub } from "react-icons/si";
import {
  HeaderContainer,
  HeaderMenu,
  HomeContainer,
  RightSide,
  SocialMedia,
} from "./styles";

export function Main() {
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
    <HomeContainer>
      <HeaderContainer>
        <h1>Rafael Ribeiro</h1>
        <h3>Desenvolvedor Frontend e Engenheiro de Software</h3>
        <p>Crio sites responsivos, soluções web e alguns jogos 🎮</p>

        <SocialMedia>
          <a
            href="https://www.linkedin.com/in/rafaelribeirodev/"
            target="_blank"
          >
            <SiLinkedin size={24} />
          </a>

          <a href="https://github.com/RafahOlive" target="_blank">
            <SiGithub size={24} />
          </a>
        </SocialMedia>

        <HeaderMenu>
          <button onClick={handelSetAbout}>Sobre</button>
          <button onClick={handleSetExperience}>Experiência</button>
          <button onClick={handleSetProjects}>Projetos</button>
          <button>
            <a href="https://rafaholive.github.io/portfolio/Currículo.pdf" target="_blank">
              Baixar Curriculo
            </a>
          </button>
        </HeaderMenu>
      </HeaderContainer>

      <RightSide>
        <Fade duration={1000}>
          {about && <About />}
          {experience && <Experience />}
          {projects && <Projects />}
        </Fade>
      </RightSide>
    </HomeContainer>
  );
}
