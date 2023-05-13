import { Container, Dado, Dados, Nome, Valor } from "./Styles";

export default function Usuario({ usuario }) {
  return (
    <Container>
      <Nome>{usuario?.nome}</Nome>
      <Dados>
        <Dado>
          Status: <Valor>{usuario?.status}</Valor>
        </Dado>
        <Dado>
          Cargo: <Valor>{usuario?.cargo}</Valor>
        </Dado>
      </Dados>
    </Container>
  );
}
