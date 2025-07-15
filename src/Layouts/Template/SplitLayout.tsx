import NavbarTemplate from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";

const SplitLayoutTemplate = () => {
  return (
    <>
      <NavbarTemplate />
      <Outlet />
      <Footer />
    </>
  );
};

export default SplitLayoutTemplate;
