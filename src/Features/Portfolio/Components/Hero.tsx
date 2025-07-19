import { CgClose } from "react-icons/cg";
import cn from "../../../libs/cn";
import Container from "../../../Styles";
import { CiShare1 } from "react-icons/ci";
import useEditImage from "../Hooks/useEditImage";
import useGetUser from "../Hooks/useGetUser";
import About from "./About";

const Hero = () => {
  const { handleClick, handleFileChange, imageURL, fileInputRef } =
    useEditImage();
  const { User } = useGetUser();
  return (
    <div className={cn(Container)}>
      <div className="py-24 mx-28 max-sm:mx-0 relative flex max-sm:flex-col gap-28">
        <div>
          {User?.Image === null ? (
            <div className="bg-[#bbb] group hover:shadow-lg hover:shadow-blue-300 transition-all duration-300  w-80 rounded-xl">
              <div className="w-10 h-10 border-t-[7px] border-l-[7px] border-l-blue-300 border-t-blue-500 rounded-tl-xl absolute top-16 -left-7 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="flex m-3  justify-end cursor-pointer">
                <div className="p-4">
                  <CiShare1
                    size={30}
                    className="cursor-pointer z-50 text-blue-500"
                    onClick={handleClick}
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>
              <div className=" group-hover:scale-[1.2] transition-all duration-300 text-5xl text-gray-500/50  font-bold h-[26pc] flex justify-center items-center">
                <div className="flex items-center">
                  <h1>400 </h1>
                  <CgClose />
                  <h1>600</h1>
                </div>
              </div>
              <div className="w-10 h-10 border-b-[7px] border-r-[7px] border-r-green-300 border-b-green-500 rounded-br-xl absolute bottom-16 left-[19pc] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
          ) : (
            <div className="overflow-hidden relative">
              <div className="w-10 h-10 border-t-[7px] border-l-[7px] border-l-blue-300 border-t-blue-500 rounded-tl-xl absolute top-16 -left-7 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <img
                src={User?.Image || imageURL}
                alt="ProfileImage.png"
                className="w-80 h-[30pc] hover:scale-105 transition-all duration-300 hover:rounded-2xl object-cover rounded-xl"
              />
              <div className="w-10 h-10 border-b-[7px] border-r-[7px] border-r-green-300 border-b-green-500 rounded-br-xl absolute bottom-16 left-[19pc] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
          )}
        </div>

        <div>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Hero;
