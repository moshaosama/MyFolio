import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import SplitLayout from "../Layouts/SplitLayout";

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
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
};

export default RouterPages;
