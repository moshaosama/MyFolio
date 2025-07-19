import { CgClose } from "react-icons/cg";
import cn from "../../../libs/cn";
import Container from "../../../Styles";
import { MdDelete, MdLiveTv } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import useGetProjects from "../Hooks/useGetProjects";
import { IoMdAdd } from "react-icons/io";

const ProjectsCards = () => {
  const { Projects } = useGetProjects();
  Projects?.projects?.map((el: any) => {
    console.log(JSON.parse(el.skills));
  });

  return (
    <>
      <div className={cn(Container)}>
        <div className="mx-28 py-10 w-[67pc] grid grid-cols-3 gap-10">
          {Projects?.projects?.map((projects: any, index: number) => (
            <div
              key={index}
              className="border-2 p-7 hover:-translate-y-5  transition-all duration-500 group border-green-500 rounded-xl"
            >
              <div>
                <div className="bg-white relative flex justify-center items-center w-full h-40 rounded-xl">
                  <div className="flex items-center text-4xl font-bold text-gray-400 group-hover:scale-110 transition-all duration-500">
                    <h1>400 </h1>
                    <CgClose />
                    <h1>600</h1>
                  </div>
                  <div className="flex items-center absolute -top-4 gap-3 -right-3">
                    <MdDelete
                      className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer"
                      size={35}
                      color="white"
                    />
                    <FiEdit
                      className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer"
                      size={35}
                      color="white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="text-white text-2xl font-bold mt-4">
                  {projects.title}
                </h1>

                <p className="text-gray-500 font-semibold text-lg">
                  {projects.description}
                </p>

                {/* Skills */}

                <div className="grid grid-cols-3 gap-5">
                  {JSON.parse(projects?.skills)?.map(
                    (skill: { name: string }) => (
                      <div className="bg-slate-900 text-center rounded-full  flex items-center justify-center">
                        <h1 className="bg-gradient-to-l from-green-700 to-purple-700 bg-clip-text text-transparent font-bold">
                          {skill?.name}
                        </h1>
                      </div>
                    )
                  )}
                </div>

                <div className="flex justify-between gap-4">
                  <button className="bg-gradient-to-l from-blue-600 to-green-600 py-2 text-white font-bold rounded-xl w-1/2 flex items-center justify-center gap-1">
                    <MdLiveTv />
                    Live Demo
                  </button>

                  <button className="bg-gradient-to-l to-slate-800  from-gray-600 from-40% py-2 text-white font-bold rounded-xl w-1/2 flex items-center justify-center gap-1">
                    <FaGithub />
                    Github
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="border-2 p-7 flex justify-center cursor-pointer items-center h-[35pc] hover:-translate-y-5 transition-all duration-500 group border-green-500 rounded-xl">
            <div className="flex justify-center flex-col text-white items-center">
              <IoMdAdd size={100} color="blue" />
              <h1 className="text-xl font-bold">Add New Project</h1>
              <p className="text-center text-gray-500">
                Click to add a new project to your portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCards;
