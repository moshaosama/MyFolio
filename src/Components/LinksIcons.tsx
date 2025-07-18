import { CiShare1 } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

const LinksIcons = () => {
  return (
    <>
      <div className="flex gap-5 mr-10">
        <i className="relative group">
          <FaGithub
            size={45}
            color="white"
            className="hover:bg-[#d1d5dc52] transition-all duration-300 p-1 rounded-xl cursor-pointer"
          />

          <i className="absolute hidden group-hover:block -left-4 -top-6">
            <CiShare1 color="white" size={25} className="cursor-pointer" />
          </i>
        </i>

        <i className="relative group">
          <FaLinkedin
            size={45}
            color="white"
            className="hover:bg-[#d1d5dc52] transition-all duration-300 p-1 rounded-xl cursor-pointer"
          />

          <i className="absolute hidden group-hover:block -left-4 -top-6">
            <CiShare1 color="white" size={25} className="cursor-pointer" />
          </i>
        </i>

        <i className="relative group">
          <FaTwitter
            size={45}
            color="white"
            className="hover:bg-[#d1d5dc52] transition-all duration-300 p-1 rounded-xl cursor-pointer"
          />

          <i className="absolute hidden group-hover:block -left-4 -top-6">
            <CiShare1 color="white" size={25} className="cursor-pointer" />
          </i>
        </i>

        <i className="relative group">
          <FaMedium
            size={45}
            color="white"
            className="hover:bg-[#d1d5dc52] transition-all duration-300 p-1 rounded-xl cursor-pointer"
          />

          <i className="absolute hidden group-hover:block -left-4 -top-6">
            <CiShare1 color="white" size={25} className="cursor-pointer" />
          </i>
        </i>
      </div>
    </>
  );
};

export default LinksIcons;
