import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Login, Cadastro, Home } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
