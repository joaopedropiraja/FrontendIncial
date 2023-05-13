import { Container } from "./Styles";
import useAuthStore from "../../stores/auth";
import { Usuario } from "../../components";

export default function Perfil() {
  const usuario = useAuthStore((state) => state.usuario);

  return (
    <Container>
      <Usuario usuario={usuario} />
    </Container>
  );
}
