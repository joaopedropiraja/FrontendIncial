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

function RotasPrivadas() {
  const token = useAuthStore((state) => state.token);

  if (token) return <Outlet />;

  return <Navigate to="/login" replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route element={<RotasPrivadas />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
