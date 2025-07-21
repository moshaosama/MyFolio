import { IoMdAdd } from "react-icons/io";
import cn from "../../../libs/cn";
import useGetExperience from "../Hooks/useGetExperience";
import { GiGraduateCap } from "react-icons/gi";
import AddExperienceModel from "./AddExperienceModel";
import { useOpenExperienceContext } from "../Context/OpenAddExperience";
import { MdDelete } from "react-icons/md";
import useDeleteExperience from "../Hooks/useDeleteExperience";

const ExperienceRender = () => {
  const { Experience } = useGetExperience();
  const { isOpenAddExperience, handleTriggerOpenAddExperience } =
    useOpenExperienceContext();
  const { handleDeleteExperience } = useDeleteExperience();

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="relative  flex flex-col items-center w-full max-w-5xl">
          <div className="absolute w-1  bg-white h-full left-1/2  -translate-x-1/2 z-10" />

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
                        "w-14 h-14 flex justify-center absolute  items-center bg-gray-100/30 z-50 rounded-full border-2 border-white",
                        experience?.Position === "left" && "left-[30.2pc]"
                      )}
                    >
                      <GiGraduateCap color="white" size={40} />
                    </i>
                    <div className="text-white relative bg-slate-800 p-4 rounded-lg w-full">
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
                    <div className="text-white relative bg-slate-800 p-4 rounded-lg w-full">
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
                        "w-14 h-14 flex justify-center absolute  items-center bg-gray-100/30 z-50 rounded-full border-2 border-white",
                        experience?.Position === "right" && "right-[30.2pc]"
                      )}
                    >
                      <GiGraduateCap color="white" size={40} />
                    </i>
                  </>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-20 ">
            {isOpenAddExperience ? null : (
              <div
                onClick={handleTriggerOpenAddExperience}
                className="border-2 z-50 absolute right-[23pc] border-gray-500 cursor-pointer hover:scale-105 transition-all duration-300 bg-[#0f0d14] w-72 rounded-xl flex flex-col items-center py-4 gap-4 justify-center "
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
