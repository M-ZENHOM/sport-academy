import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutClub from "./pages/AboutClub";
import Activties from "./pages/Activties";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Root from "./Root";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "عن-النادي",
        element: <AboutClub />,
      },
      {
        path: "الانشطة-الرياضية",
        element: <Activties />,
      },
      {
        path: "تواصل-معنا",
        element: <ContactUs />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
