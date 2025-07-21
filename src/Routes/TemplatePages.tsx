import SplitLayoutTemplate from "../Layouts/Template/SplitLayout";
import Template from "../Pages/Templates";
import WithLoader from "../Utils/WithLoader";

const SplitLayoutLoader = WithLoader(SplitLayoutTemplate);

export const TemplatePages = {
  path: "template",
  element: <SplitLayoutLoader />,
  children: [
    {
      index: true,
      element: <Template />,
    },
  ],
};
