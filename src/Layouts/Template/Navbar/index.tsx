import { MdDelete } from "react-icons/md";
import { NavbarTemplateData } from "../../../Data/NavbarTemplateData";

const NavbarTemplate = () => {
  return (
    <>
      <div className="bg-[#2f3237] w-full flex justify-center gap-5">
        <div className="flex justify-center gap-20 py-7 px-24 my-4 rounded-full bg-[#211f2a]">
          {NavbarTemplateData.map((data) => (
            <div className="text-gray-500 flex group">
              <h1 className="text-xl font-semibold hover:text-white transition-all duration-500 cursor-pointer">
                {data.name}
              </h1>
              <i className="hidden hover:text-white transition-all duration-300 cursor-pointer group-hover:inline-block">
                <MdDelete size={20} />
              </i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarTemplate;
