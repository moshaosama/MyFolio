import { Outlet } from "react-router";
import Footer from "./Footer";
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
