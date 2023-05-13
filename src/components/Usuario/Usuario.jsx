import { Container, Dado, Dados, Nome, Valor } from "./Styles";

export default function Usuario({ usuario }) {
  return (
    <Container>
      <Nome>{usuario.nome}</Nome>
      <Dados>
        <Dado>
          E-mail: <Valor>{usuario.email}</Valor>
        </Dado>
        <Dado>
          Cargo: <Valor>{usuario.cargo}</Valor>
        </Dado>
        <Dado>
          Status: <Valor>{usuario.status}</Valor>
        </Dado>
      </Dados>
    </Container>
  );
}
