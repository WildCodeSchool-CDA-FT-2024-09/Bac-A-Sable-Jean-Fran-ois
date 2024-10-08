import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { instance } from "./services/connexion.ts";

const { VITE_BACKEND_URL } = import.meta.env;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const repos = await instance
        .get(`${VITE_BACKEND_URL}/repos`)
        .then((res) => res.data);
      return repos;
    },
  },
]);

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
