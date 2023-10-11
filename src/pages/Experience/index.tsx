import { Data, MainContainer, Text } from "./styles";

export function Experience() {
  return (
    <>
      <MainContainer>
        <Data>2022 - 2023</Data>
        <Text>
          <h3>Pacto Soluções</h3>
          <h4>Desenvolvedor frontend</h4>
          <p>
            Criação de páginas web utilizando componentes criados pela Pacto,
            usando Angular (Versão 8 /Node 12.22.12). Essas páginas tem
            interligação com o Backend onde eu criava formulários e exibo em
            listas.
          </p>

          <br />

          <p>
            Realizava a criação de novos componentes ou alteração dos mesmos de
            acordo com as especificações. Realizava as documentações dos
            componentes utilizando Storybook. Projeto iniciado por mim e
            orquestrado através do PM e tech lead, onde a estratégia eram
            documentar os componentes sem atrapalhar as sprints e criar um
            design system.
          </p>

          <br />

          <p>
            Adquiri conhecimentos em docker no decorrer do projeto para ter
            acesso aos serviços de backend local, para assim ganhar velocidade
            nas entregas. Participei de reuniões para arquitetar um novo design
            system da Pacto, junto com a reformulação dos componentes e
            alinhamento com o time de UX.
          </p>

          <br />
          
          <p>
            Usava o Gitlab como versionador e acompanhava as publicações através
            da pipeline. Utilizava o Jira para controle da sprint e apontamentos
            de horas.
          </p>
        </Text>
      </MainContainer>
    </>
  );
}
