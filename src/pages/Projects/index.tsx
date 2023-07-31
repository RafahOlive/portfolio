import todo from "../../assets/todo.png";
import { TechBubble } from "../../components/TechBubble";
import {
  Container,
  ImageBox,
  LinkBox,
  MainBox,
  TechBox,
  TextBox,
} from "./styles";

export function Projects() {
  return (
    <Container>
      <MainBox>
        <ImageBox>
          <img src={todo} sizes="16px" alt="lista de tarefas" />
        </ImageBox>
        <TextBox>
          <h3>Lista de tarefas</h3>
          <p>Aplicativo que armazena informacões</p>
          <LinkBox>
            <a
              href="https://rafaholive.github.io/todo-list-react/"
              target="_blank"
            >
              Projeto
            </a>
            <a
              href="https://github.com/RafahOlive/todo-list-react"
              target="_blank"
            >
              Repositorio
            </a>
          </LinkBox>
          <TechBox>
            <TechBubble name="React" />
            <TechBubble name="Typescript" />
            <TechBubble name="Vite" />
            <TechBubble name="Responsivo" />
          </TechBox>
        </TextBox>
      </MainBox>

      {/* Ecommerce */}

      <MainBox>
        <ImageBox>
          <img src={todo} sizes="16px" alt="E-commerce" />
        </ImageBox>
        <TextBox>
          <h3>E-Commerce</h3>
          <p>Site feito de exemplo de um e-commerce.</p>
          <LinkBox>
            {/* <a
              href="https://rafaholive.github.io/todo-list-react/"
              target="_blank"
            >
              Projeto
            </a> */}
            <a
              href="https://github.com/RafahOlive/E-commerce"
              target="_blank"
            >
              Repositorio
            </a>
          </LinkBox>
          <TechBox>
            <TechBubble name="React" />
            <TechBubble name="Typescript" />
            <TechBubble name="Stiches" />
            <TechBubble name="Nextjs" />
            <TechBubble name="Stripe" />
            <TechBubble name="Axios" />
          </TechBox>
        </TextBox>
      </MainBox>
    </Container>
  );
}
