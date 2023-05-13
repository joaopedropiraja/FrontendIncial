import { useState } from "react";
import { Container, Form, Campo, Label, Input, Button } from "./Styles";
import api from "../../services/api";
import useAuthStore from "../../stores/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const token = useAuthStore((state) => state.token);
  const usuario = useAuthStore((state) => state.usuario);
  const setToken = useAuthStore((state) => state.setToken);
  console.log({ token, usuario });

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      setCarregando(true);
      const res = await api.post("/login", { email, senha });
      const { token } = res.data;

      setToken(token);
    } catch (erro) {
      console.error(erro);
      alert(erro.message);
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
            onChange={(e) => setSenha(e.target.value)}
          />
        </Campo>
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}
