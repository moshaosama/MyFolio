import { IoMdAdd, IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import cn from "../../../libs/cn";
import useGetExperience from "../Hooks/useGetExperience";
import { GiGraduateCap } from "react-icons/gi";
import AddExperienceModel from "./AddExperienceModel";
import { useOpenExperienceContext } from "../Context/OpenAddExperience";
import { MdDelete } from "react-icons/md";
import useDeleteExperience from "../Hooks/useDeleteExperience";
import { FaCode, FaLaptopCode } from "react-icons/fa";
{
  /* <GiGraduateCap /> */
  //   <FaCode />
  //   <FaLaptopCode />
}

const ExperienceRender = () => {
  const { Experience } = useGetExperience();
  const { isOpenAddExperience, handleTriggerOpenAddExperience } =
    useOpenExperienceContext();
  const { handleDeleteExperience } = useDeleteExperience();

  return (
    <>
      <div className="flex justify-center mt-10 z-40">
        <div className="relative  flex flex-col items-center w-full max-w-5xl">
          <div className="absolute w-1  bg-white max-sm:hidden h-full left-1/2  -translate-x-1/2 z-10" />

          {Experience?.experience?.map((experience: any, index: number) => (
            <div
              key={index}
              className={`flex gap-6 my-6 w-full items-center justify-${
                experience?.Position === "left" ? "start" : "end"
              }`}
            >
              <div className="flex gap-6 max-w-md">
                {experience?.Position === "left" && (
                  <>
                    <i
                      className={cn(
                        "w-14 h-14 max-sm:hidden flex justify-center absolute  items-center bg-gray-100/30 z-50 rounded-full border-2 border-white",
                        experience?.Position === "left" && "left-[30.2pc]"
                      )}
                    >
                      {experience?.Icon === "Education" && (
                        <GiGraduateCap color="white" size={40} />
                      )}
                      {experience?.Icon === "Development" && (
                        <FaCode color="white" size={35} />
                      )}
                      {experience?.Icon === "Programming" && (
                        <FaLaptopCode color="white" size={35} />
                      )}
                    </i>
                    <div className="text-white relative bg-slate-800 max-sm:mx-3 p-4 rounded-lg w-full">
                      <div className="absolute top-0 left-[27pc] max-sm:hidden">
                        <i>
                          <IoMdArrowDropright size={50} />
                        </i>
                      </div>
                      <p className="text-sm text-gray-400">
                        {experience?.Date}
                      </p>
                      <h1 className="text-xl font-bold">{experience?.Title}</h1>
                      <p className="text-sm text-gray-500">
                        {experience?.Foundation}
                      </p>
                      <p className="text-gray-400">{experience?.Description}</p>

                      <div className="absolute top-0 right-0 p-2">
                        <i>
                          <MdDelete
                            className="p-1 bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer"
                            size={30}
                            color="white"
                            onClick={() =>
                              handleDeleteExperience(experience.id)
                            }
                          />
                        </i>
                      </div>
                    </div>
                  </>
                )}

                {experience?.Position === "right" && (
                  <>
                    <div className="text-white relative bg-slate-800 max-sm:mx-3 p-4 rounded-lg w-full">
                      <div className="absolute top-0 max-sm:hidden right-[27pc]">
                        <i>
                          <IoMdArrowDropleft size={50} />
                        </i>
                      </div>
                      <p className="text-sm text-gray-400">
                        {experience?.Date}
                      </p>
                      <h1 className="text-xl font-bold">{experience?.Title}</h1>
                      <p className="text-sm text-gray-500">
                        {experience?.Foundation}
                      </p>
                      <p className="text-gray-400">{experience?.Description}</p>
                      <div className="absolute top-0 p-2 right-0">
                        <i>
                          <MdDelete
                            className="p-1 bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer"
                            size={30}
                            color="white"
                            onClick={() =>
                              handleDeleteExperience(experience.id)
                            }
                          />
                        </i>
                      </div>
                    </div>
                    <i
                      className={cn(
                        "w-14 h-14 flex max-sm:hidden justify-center absolute  items-center bg-gray-100/30 z-50 rounded-full border-2 border-white",
                        experience?.Position === "right" && "right-[30.2pc]"
                      )}
                    >
                      {experience?.Icon === "Education" && (
                        <GiGraduateCap color="white" size={40} />
                      )}
                      {experience?.Icon === "Development" && (
                        <FaCode color="white" size={35} />
                      )}
                      {experience?.Icon === "Programming" && (
                        <FaLaptopCode color="white" size={35} />
                      )}
                    </i>
                  </>
                )}
              </div>
            </div>
          ))}
          {/* margin: 0pc 1pc;
width: 21.6pc; */}
          <div className="flex gap-20 ">
            {isOpenAddExperience ? null : (
              <div
                onClick={handleTriggerOpenAddExperience}
                className="border-2 z-50 absolute right-[23pc] max-sm:mx-3 max-sm:w-[24.6pc]  max-sm:right-0  border-gray-500 cursor-pointer hover:scale-105 transition-all duration-300 bg-[#0f0d14] w-72 rounded-xl flex flex-col items-center py-4 gap-4 justify-center "
              >
                <i>
                  <IoMdAdd size={70} color="blue" />
                </i>
                <p className="text-white text-2xl font-bold">
                  Add New Experience
                </p>
              </div>
            )}
            {isOpenAddExperience && <AddExperienceModel />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceRender;
