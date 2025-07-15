import Hero from "../../Features/Home/Components/Hero";
import PopUpSupport from "../../Features/Home/Components/PopUpSupport";
import PopUpTemplates from "../../Features/Templates/Components/PopUpTemplates";

const Home = () => {
  return (
    <>
      <div className="h-[83.1vh] py-20 bg-gradient-to-l to-blue-900  from-indigo-950">
        <Hero />
        <PopUpSupport />
        <PopUpTemplates />
      </div>
    </>
  );
};

export default Home;
