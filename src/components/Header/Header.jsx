import { Link, useNavigate } from "react-router-dom";
import { Container } from "./Styles";
import useAuthStore from "../../stores/auth";

export default function Header() {
  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();

  const logout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <Container>
      <Link to="/login">Login</Link>
      <Link to="/cadastro">Cadastro</Link>

      {!!usuario && (
        <>
          <Link to="/">Home</Link>
          <Link to="/perfil">Perfil</Link>
          <h2>Seja bem-vindo {usuario.nome}</h2>
          <button type="button" onClick={logout}>
            Deslogar
          </button>
        </>
      )}
    </Container>
  );
}
