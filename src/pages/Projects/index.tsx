import { ProjectBox } from "../../components/ProjectBox";
import todo from "../../assets/todo.png"
export function Projects() {
  return (
    <ProjectBox
      title="Lista de tarefas"
      description="Aplicativo que armazena suas tarefas diárias"
      link="https://rafaholive.github.io/todo-list-react/"
      github="https://github.com/RafahOlive/todo-list-react"
      img={todo}
    />
  );
}
