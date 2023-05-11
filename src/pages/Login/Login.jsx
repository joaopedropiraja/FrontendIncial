import { useState } from "react";
import { Container } from "./Styles";
import { useAuthStore } from "../../stores/auth";
import api from "../../services/api";

const style = { display: "flex", flexDirection: "column", gap: "10px" };

export default function Login() {
  const [usuarios, setUsuarios] = useState([]);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const usuario = useAuthStore((state) => state.usuario);
  const setToken = useAuthStore((state) => state.setToken);
  const clear = useAuthStore((state) => state.clear);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get("/usuarios");
      setUsuarios(data);
    } catch (erro) {
      console.log(erro);
      alert(erro.response.data?.message || "Deu ruim aqui!!!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await api.post("/login", { email, senha });
      setToken(data.token);
    } catch (erro) {
      console.log(erro);
      alert(erro.response.data?.message || "Deu ruim aqui!!!");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    );
  if (usuario)
    return (
      <Container>
        <div style={{ ...style, gap: "25px" }}>
          <h1>Olá {usuario.nome}</h1>

          <button type="button" onClick={getUsers}>
            Consultar usuários
          </button>
          <div style={{ ...style, gap: "15px" }}>
            {usuarios.map(({ _id, nome, status, cargo }) => (
              <div key={_id}>
                <h1>{nome}</h1>
                <h2>
                  Status: <span style={{ color: "white" }}>{status}</span>
                </h2>
                <h2>
                  Cargo: <span style={{ color: "white" }}>{cargo}</span>
                </h2>
              </div>
            ))}
          </div>
          <button type="button" onClick={clear}>
            Logout
          </button>
        </div>
      </Container>
    );
  return (
    <Container>
      <form onSubmit={handleSubmit} style={style}>
        <div style={style}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div style={style}>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            name="senha"
            id="senha"
            required
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
