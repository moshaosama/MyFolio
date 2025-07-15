import SplitLayoutTemplate from "../Layouts/Template/SplitLayout";
import Template from "../Pages/Templates";

export const TemplatePages = {
  path: "template",
  element: <SplitLayoutTemplate />,
  children: [
    {
      index: true,
      element: <Template />,
    },
  ],
};
