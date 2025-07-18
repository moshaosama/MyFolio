import { CiShare1 } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import LinksIcons from "../../../Components/LinksIcons";
import EditLinkModel from "../../../Components/EditLinkModel";

const Links = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <button className="group relative bg-gradient-to-l p-5 w-60 text-white hover:shadow-lg shadow-[#2a7b9b] hover:scale-105 transition-all duration-300 font-bold rounded-xl cursor-pointer  text-lg my-10 from-[#2a7b9b] to-[#57c785]">
          <div className="flex gap-4 items-center justify-center">
            <p>View My Resume</p>
            <i>
              <GoArrowRight />
            </i>
          </div>

          <i className="absolute hidden group-hover:block -right-4 -top-6">
            <CiShare1 color="white" size={25} className="cursor-pointer" />
          </i>
        </button>
        <LinksIcons />
        {/* <EditLinkModel
          Title="Edit Resume Button"
          Label="Resume URL"
          DefaultValue=""
        /> */}
      </div>
    </>
  );
};

export default Links;
