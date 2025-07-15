import cn from "../../libs/cn";
import Container from "../../Styles";

const NavbarHome = () => {
  return (
    <>
      <div className="bg-gradient-to-l py-5 to-indigo-950 from-blue-900">
        <div className={cn(Container, "flex justify-between")}>
          <div>
            <h1 className="text-white font-bold text-2xl">Myfolio</h1>
          </div>

          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarHome;
