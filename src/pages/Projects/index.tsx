import { BubbleTechs, ImageBox, MainBox, TechBox, TextBox } from "./style";
import todo from "../../assets/todo.png"
export function Projects() {
  return (
    <a href="https://rafaholive.github.io/todo-list-react/" target="_blank">
      <MainBox>
        <ImageBox>
          <img src={todo} sizes="16px" alt="" />
        </ImageBox>
        <TextBox>
          <h3>Lista de tarefas</h3>
          <p>Aplicativo que armazena as tarefas do seu dia a dia.</p>
          <TechBox>
            <BubbleTechs>React Native</BubbleTechs>
          </TechBox>
        </TextBox>
      </MainBox>
    </a>
  );
}
