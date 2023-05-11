import { useEffect, useState } from "react";

export default function useApi({ requisicao }) {
  const [data, setData] = useState(null);
  const [erro, setErro] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const executarRequisicao = async () => {
    try {
      setIsLoading(true);
      const { data } = await requisicao;
      setData(data);
    } catch (erro) {
      console.log(erro);
      alert(erro.response.data?.message || "Deu ruim aqui!!!");
      setErro(erro);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    executarRequisicao();
  }, []);

  return { data, isLoading, erro };
}
