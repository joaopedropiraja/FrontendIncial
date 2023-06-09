import { useState } from "react";
import { Container, Form, Campo, Label, Input, Button } from "./Styles";
import api from "../../services/api";
import useAuthStore from "../../stores/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      setCarregando(true);
      const res = await api.post("/login", { email, senha });
      const { token } = res.data;

      setToken(token);
      navigate("/");
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally {
      setCarregando(false);
    }
  };

  if (carregando)
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    );

  return (
    <Container>
      <Form onSubmit={handleSumbit}>
        <Campo>
          <Label htmlFor="email">E-mail: </Label>
          <Input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Campo>
        <Campo>
          <Label htmlFor="senha">Senha: </Label>
          <Input
            type="password"
            name="senha"
            id="senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Campo>
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}
