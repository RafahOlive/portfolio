import { BubbleTechs, ImageBox, MainBox, TechBox, TextBox } from "./style";

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
        <TechBox>
          <BubbleTechs>React Native</BubbleTechs>
        </TechBox>
        <a href={props.link} target="_blank">
          Link para o projeto
        </a>
        <a href={props.github} target="_blank">
          Repositorio do projeto
        </a>
      </TextBox>
    </MainBox>
  );
}
