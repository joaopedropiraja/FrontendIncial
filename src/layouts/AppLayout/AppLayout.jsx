import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
import { Header, Footer } from "../../components";

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
