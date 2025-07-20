import { CgClose } from "react-icons/cg";
import { useOpenSkillContext } from "../Context/OpenEditSkillContext";
import useAddSkill from "../Hooks/useAddSkill";

const AddSkillModel = () => {
  const { handleTriggerOpenAddModel } = useOpenSkillContext();
  const { handleAddSkill, handleSubmit, register } = useAddSkill();
  return (
    <>
      <div className="fixed bg-black/60 top-0 w-full h-[100vh] flex justify-center items-center">
        <div className="bg-slate-700 rounded-xl text-white font-bold w-96 p-3">
          <div className="flex justify-between items-center mx-4">
            <h1>Add New Skill</h1>
            <CgClose
              onClick={handleTriggerOpenAddModel}
              color="gray"
              size={25}
              className="cursor-pointer"
            />
          </div>

          <form className="p-3" onSubmit={handleSubmit(handleAddSkill)}>
            <p className="flex flex-col gap-1">
              <label className="text-sm text-gray-400 mx-1">Skill</label>
              <input
                type="text"
                className="bg-slate-800 py-2 rounded-lg px-2 focus:outline-0"
                {...register("skill_name", { required: true })}
              />
            </p>

            <p className="flex justify-end mt-2">
              <button className="bg-blue-500 w-32 py-1 rounded-xl cursor-pointer hover:bg-blue-800 transition-all duration-300">
                Add
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSkillModel;
