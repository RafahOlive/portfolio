import { BubbleTechs, ImageBox, MainBox, TechBox, TextBox } from "./style";
export function Projects() {
  return (
    <MainBox>
      <ImageBox></ImageBox>
      <TextBox>
        <h3>Lista de tarefas</h3>
        <p>Aplicativo que armazena as tarefas do seu dia a dia.</p>
        <TechBox>
          <BubbleTechs>React Native</BubbleTechs>
        </TechBox>
      </TextBox>
    </MainBox>
  );
}
