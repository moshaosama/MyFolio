import { Outlet } from "react-router";
import Footer from "./CopyRight";
import NavbarHome from "./NavbarHome";

const SplitLayout = () => {
  return (
    <>
      <NavbarHome />
      <Outlet />
      <Footer />
    </>
  );
};

export default SplitLayout;
