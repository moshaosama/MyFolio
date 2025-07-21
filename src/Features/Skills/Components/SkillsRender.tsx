import { MdDelete } from "react-icons/md";
import cn from "../../../libs/cn";
import Container from "../../../Styles";
import useGetSkill from "../Hooks/useGetSkill";
import { useOpenSkillContext } from "../Context/OpenEditSkillContext";
import { IoMdAdd } from "react-icons/io";
import useDeleteSkill from "../Hooks/useDeletSkill";
import AddSkillModel from "./AddSkillModel";

const SkillsRender = () => {
  const { Skills } = useGetSkill();
  const { isOpenEditModel, isOpenAddModel, handleTriggerOpenAddModel } =
    useOpenSkillContext();
  const { handleDeleteSkill } = useDeleteSkill();
  return (
    <>
      <div className={cn(Container)}>
        <div className="mx-28 max-sm:mx-0 py-10 w-[67pc] max-sm:w-full grid grid-cols-6 relative max-sm:grid-cols-2 gap-10">
          {Skills?.skills?.map(
            (skill: { skills: string; image_skill: string; id: number }) => (
              <div
                key={skill.id}
                className=" relative rounded-xl hover:shadow-xl transition-all duration-500 hover:shadow-white h-24 hover:bg-slate-700 flex flex-col justify-center items-center group"
              >
                <img src={skill.image_skill} />
                <h1 className="text-white font-bold text-xl group-hover:scale-110 transition-all duration-500">
                  {skill.skills}
                </h1>

                {isOpenEditModel && (
                  <MdDelete
                    onClick={() => handleDeleteSkill(skill.id)}
                    color="white"
                    size={30}
                    className="bg-red-500 absolute top-0 right-0 p-1 rounded-full cursor-pointer hover:bg-red-800"
                  />
                )}
              </div>
            )
          )}
          {isOpenEditModel && (
            <div
              onClick={handleTriggerOpenAddModel}
              className=" relative rounded-xl cursor-pointer hover:shadow-xl transition-all duration-500 hover:shadow-white h-24 hover:bg-slate-700 flex flex-col justify-center items-center group"
            >
              <i>
                <IoMdAdd color="blue" size={50} />
              </i>
              <h1 className="text-white font-bold text-3xl">Add Skill</h1>
            </div>
          )}
        </div>
      </div>

      {isOpenAddModel && <AddSkillModel />}
    </>
  );
};

export default SkillsRender;
