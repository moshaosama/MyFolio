import { CgClose } from "react-icons/cg";
import cn from "../../../libs/cn";
import Container from "../../../Styles";
import { MdDelete, MdLiveTv } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaCheck, FaGithub } from "react-icons/fa";
import useGetProjects from "../Hooks/useGetProjects";
import { IoMdAdd } from "react-icons/io";
import useCreateProject from "../Hooks/useCreateProject";
import useDeleteProject from "../Hooks/useDeleteProject";
import useEditPeoject from "../Hooks/useEditPeoject";
import { GoX } from "react-icons/go";
import { Link } from "react-router";
import useGetSkillProject from "../Hooks/useGetProject";
import useDeleteProjectSkill from "../Hooks/useDeleteProjectSkill";
import useCreateSkillProject from "../Hooks/useCreateSkillProject";

const ProjectsCards = () => {
  const { Projects } = useGetProjects();
  const { handleCreateNewProject } = useCreateProject();
  const { handleDeleteProject } = useDeleteProject();
  const { SkillsProject } = useGetSkillProject();
  const {
    handleSubmitCreateSkillProject,
    handleCreateSkillProject,
    registerCreateSkillProject,
  } = useCreateSkillProject();
  const {
    isOpenEdit,
    handleTriggerOpenEdit,
    handleCloseOpenEdit,
    register,
    handleEditProject,
    handleSubmit,
  } = useEditPeoject();
  const { handleDeleteSkillProject } = useDeleteProjectSkill();
  return (
    <>
      <div className={cn(Container)}>
        <div className="mx-28 max-sm:mx-0 py-10 w-[67pc] max-sm:w-full grid grid-cols-3 max-sm:grid-cols-1 gap-10">
          {Projects?.projects?.map((projects: any, index: number) => (
            <div
              key={index}
              className="border-2 p-7 hover:-translate-y-5  transition-all duration-500 group border-green-500 rounded-xl"
            >
              <div>
                <div className="bg-white z-40 relative flex justify-center items-center w-full h-40 rounded-xl">
                  <div className="flex items-center text-4xl font-bold text-gray-400 group-hover:scale-110 transition-all duration-500">
                    <h1>400 </h1>
                    <CgClose />
                    <h1>600</h1>
                  </div>
                  <div className="flex items-center absolute -top-4 gap-3 -right-3">
                    {isOpenEdit === projects.id ? (
                      <>
                        <GoX
                          className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer"
                          size={35}
                          color="white"
                          onClick={handleCloseOpenEdit}
                        />
                        <FaCheck
                          className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-all duration-300 cursor-pointer"
                          size={35}
                          color="white"
                          onClick={handleSubmit(handleEditProject)}
                        />
                      </>
                    ) : (
                      <>
                        <MdDelete
                          className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer"
                          size={35}
                          color="white"
                          onClick={() => handleDeleteProject(projects.id)}
                        />
                        <FiEdit
                          className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer"
                          size={35}
                          color="white"
                          onClick={() => handleTriggerOpenEdit(projects.id)}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {isOpenEdit === projects.id ? (
                  <input
                    type="text"
                    defaultValue={projects.title}
                    className="text-white text-2xl font-bold w-full 
                             focus:outline-0 border-b-2 border-b-gray-500 
                             overflow-hidden text-ellipsis whitespace-nowrap"
                    {...register("title", { required: true })}
                  />
                ) : (
                  <h1 className="text-white text-2xl font-bold mt-4">
                    {projects.title}
                  </h1>
                )}

                {isOpenEdit === projects.id ? (
                  <textarea
                    className="text-gray-500 font-semibold text-lg w-full border-2 border-gray-500 h-48"
                    defaultValue={projects.description}
                    {...register("description", { required: true })}
                  />
                ) : (
                  <p className="text-gray-500 font-semibold text-lg">
                    {projects.description}
                  </p>
                )}

                {/* Skills */}

                {isOpenEdit === projects.id ? (
                  <>
                    {SkillsProject?.map((skills, index) => {
                      return (
                        <div className="grid grid-cols-3 gap-2" key={index}>
                          {skills?.result
                            ?.filter(
                              (skill: any) => skill.project_id === projects?.id
                            )
                            ?.map((skill_project: any, i: number) => (
                              <>
                                <div className="flex gap-1">
                                  <h1
                                    key={i}
                                    className="bg-gradient-to-l from-green-700 to-purple-700 bg-clip-text text-transparent font-bold"
                                  >
                                    {skill_project?.skill_name}
                                  </h1>
                                  <MdDelete
                                    onClick={() =>
                                      handleDeleteSkillProject(skill_project.id)
                                    }
                                    className="bg-red-600 text-xl rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer"
                                    color="white"
                                  />
                                </div>
                              </>
                            ))}
                        </div>
                      );
                    })}
                    <form
                      onSubmit={handleSubmitCreateSkillProject((data) =>
                        handleCreateSkillProject(data, projects.id)
                      )}
                      className="flex justify-between gap-2 items-center"
                    >
                      <input
                        type="text"
                        placeholder="Tag name"
                        defaultValue={projects?.skills}
                        className="bg-slate-800 p-2 w-full text-white rounded-lg"
                        {...registerCreateSkillProject("skill_name", {
                          required: true,
                        })}
                      />
                      <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 transition-all duration-200 p-2 rounded-xl text-white font-semibold ">
                        Add
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    {SkillsProject?.map((skills, index) => {
                      return (
                        <div className="grid grid-cols-3 gap-5" key={index}>
                          {skills?.result
                            ?.filter(
                              (skill: any) => skill.project_id === projects?.id
                            )
                            ?.map((skill_project: any, i: number) => (
                              <h1
                                key={i}
                                className="bg-gradient-to-l from-green-700 to-purple-700 bg-clip-text text-transparent font-bold"
                              >
                                {skill_project?.skill_name}
                              </h1>
                            ))}
                        </div>
                      );
                    })}
                  </>
                )}

                {isOpenEdit === projects.id ? (
                  <div className="flex flex-col gap-2">
                    <p>
                      <label className="text-gray-500">Github</label>
                      <input
                        type="text"
                        defaultValue={projects.githubLink}
                        className="bg-slate-800 p-2 w-full text-white rounded-lg"
                        {...register("githubLink", { required: true })}
                      />
                    </p>
                    <p>
                      <label className="text-gray-500">Live Demo</label>
                      <input
                        type="text"
                        defaultValue={projects.liveDemoLink}
                        className="bg-slate-800 p-2 w-full text-white rounded-lg"
                        {...register("liveDemoLink", { required: true })}
                      />
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-between gap-4">
                    <button className="bg-gradient-to-l from-blue-600 cursor-pointer to-green-600 py-2 text-white font-bold rounded-xl w-1/2">
                      <Link
                        to={projects.liveDemoLink}
                        className="flex items-center justify-center gap-1"
                      >
                        <MdLiveTv />
                        Live Demo
                      </Link>
                    </button>

                    <button className="bg-gradient-to-l to-slate-800 cursor-pointer  from-gray-600 from-40% py-2 text-white font-bold rounded-xl w-1/2">
                      <Link
                        to={projects.githubLink}
                        className="flex items-center justify-center gap-1"
                      >
                        <FaGithub />
                        Github
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div
            onClick={handleCreateNewProject}
            className="border-2 p-7 flex justify-center cursor-pointer items-center  hover:-translate-y-5 transition-all duration-500 group border-green-500 rounded-xl"
          >
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
