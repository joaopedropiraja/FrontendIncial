import { useEffect, useState } from "react";
import { Container } from "./Styles";
import api from "../../services/api";
import { Usuario } from "../../components";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const getUsuarios = async () => {
    try {
      setCarregando(true);
      const res = await api.get("/usuarios");
      setUsuarios(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally {
      setCarregando(false);
    }
  };
  useEffect(() => {
    getUsuarios();
  }, []);

  if (carregando)
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    );

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {usuarios.map((usuario) => (
          <Usuario usuario={usuario} />
        ))}
      </div>
    </Container>
  );
}
