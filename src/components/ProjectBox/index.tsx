import { TechBubble } from "../TechBubble";
import { ImageBox, LinkBox, MainBox, TechBox, TextBox } from "./styles";

type ProjectBoxProps = {
  title: string;
  description: string;
  link: string;
  github: string;
  img: string;
};

export function ProjectBox(props: ProjectBoxProps) {
  return (
    <MainBox>
      <ImageBox>
        <img src={props.img} sizes="16px" alt="" />
      </ImageBox>
      <TextBox>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <LinkBox>
          <a href={props.link} target="_blank">
            Projeto
          </a>
          <a href={props.github} target="_blank">
            Repositorio
          </a>
        </LinkBox>
        <TechBox>
          <TechBubble name="React" />
          <TechBubble name="Vite" />
          <TechBubble name="Styled-components" />
        </TechBox>
      </TextBox>
    </MainBox>
  );
}
