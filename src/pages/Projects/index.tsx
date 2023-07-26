import todo from "../../assets/todo.png";
import { TechBubble } from "../../components/TechBubble";
import { ImageBox, LinkBox, MainBox, TechBox, TextBox } from "./styles";

export function Projects() {
  return (
    <MainBox>
      <ImageBox>
        <img src={todo} sizes="16px" alt="lista de tarefas" />
      </ImageBox>
      <TextBox>
        <h3>Lista de tarefas</h3>
        <p>Aplicativo que armazena informacões</p>
        <LinkBox>
          <a href="https://rafaholive.github.io/todo-list-react/" target="_blank">
            Projeto
          </a>
          <a href="https://github.com/RafahOlive/todo-list-react" target="_blank">
            Repositorio
          </a>
        </LinkBox>
        <TechBox>
          <TechBubble name="React" />
          <TechBubble name="Vite" />
          <TechBubble name="Responsivo" />
        </TechBox>
      </TextBox>
    </MainBox>
  );
}
