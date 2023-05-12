import { useState } from "react";
import { Container, Form, Campo, Label, Input, Button } from "./Styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    console.log({ email, senha });
  };
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
