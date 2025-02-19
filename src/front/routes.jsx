// Import necessary components and functions from react-router-dom.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import Signup from "./pages/Signup";  // Importa el componente Signup
import Login from "./pages/Login";    // Importa el componente Login
import Private from "./pages/Private"; // Importa el componente Private

export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
          {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
          <Route path="/" element={<Home />} />
          <Route path="/single/:theId" element={<Single />} />  {/* Dynamic route for single items */}
          <Route path="/demo" element={<Demo />} />
          <Route path="/signup" element={<Signup />} />  {/* Ruta para registro */}
          <Route path="/login" element={<Login />} />    {/* Ruta para inicio de sesión */}
          <Route path="/private" element={<Private />} /> {/* Ruta para página privada */}
      </Route>
  )
);
