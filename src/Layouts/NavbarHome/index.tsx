import { FaGithub, FaLinkedin } from "react-icons/fa";
import cn from "../../libs/cn";
import Container from "../../Styles";
import { useOpenPopUpSupportContext } from "../../Features/Home/Context/useOpenPopUpSupport";

const NavbarHome = () => {
  const { triggerOpenPopUp } = useOpenPopUpSupportContext();
  return (
    <>
      <div className="bg-gradient-to-l  py-5 to-indigo-950 from-blue-900 border-b-1 border-gray-600">
        <div className={cn(Container, "flex justify-between items-center")}>
          <div>
            <h1 className="text-white font-bold text-2xl">Myfolio</h1>
          </div>

          <div className="flex items-center gap-5 text-[#d1d5dc]">
            <a href="https://github.com/moshaosama" target="_blank">
              <FaGithub
                size={30}
                className="hover:bg-[#d1d5dc52] p-1 rounded-xl cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/in/thisfekry/" target="_blank">
              <FaLinkedin
                size={30}
                className="hover:bg-[#d1d5dc52] p-1 rounded-xl cursor-pointer"
              />
            </a>
            <h1
              onClick={triggerOpenPopUp}
              className="hover:bg-[#d1d5dc52] p-2 rounded-xl cursor-pointer"
            >
              ☕ Support us
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarHome;
