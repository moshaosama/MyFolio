import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SplitLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SplitLayout;
