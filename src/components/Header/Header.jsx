import { Link, useNavigate } from "react-router-dom";
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
    <div style={{ display: "flex", gap: "15px" }}>
      <Link to="/cadastro">Cadastro</Link>
      {!!usuario ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/perfil">Perfil</Link>
          <h3>Seja bem-vindo {usuario.nome}</h3>
          <button type="button" onClick={logout}>
            Deslogar
          </button>
        </>
      ) : (
        <button type="button" onClick={() => navigate("/login")}>
          Logar
        </button>
      )}
    </div>
  );
}
