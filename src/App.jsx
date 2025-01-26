import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

import Home from "./Components/Home/Home";

import Portfolio from "./Components/Portfolio/Portfolio";
import Layout from "./Components/Layout/Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
