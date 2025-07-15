import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import SplitLayout from "../Layouts/Home/SplitLayout";
import { TemplatePages } from "./TemplatePages";

const RouterPages = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <SplitLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    TemplatePages,
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
};

export default RouterPages;
