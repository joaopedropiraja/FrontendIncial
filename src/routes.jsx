import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Login, Cadastro, Home, Perfil } from "./pages";
import { AppLayout } from "./layouts";
import useAuthStore from "./stores/auth";

const RotasPrivadas = () => {
  const token = useAuthStore((state) => state.token);

  if (token) return <Outlet />;
  return <Navigate to="/login" />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route element={<RotasPrivadas />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
