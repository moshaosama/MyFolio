import { useOpenExperienceContext } from "../Context/OpenAddExperience";
import useAddExperience from "../Hooks/useAddExperience";

const AddExperienceModel = () => {
  const { handleTriggerOpenAddExperience } = useOpenExperienceContext();
  const { handleAddExperience, handleSubmit, register } = useAddExperience();
  return (
    <>
      <div className="relative text-white bg-slate-800 p-4 rounded-lg  left-[19pc] max-sm:left-0 border-2 border-gray-600 w-[30pc] max-sm:w-[21.6pc] max-sm:mx-3">
        <form
          onSubmit={handleSubmit(handleAddExperience)}
          className="grid grid-cols-2 gap-4 w-full"
        >
          <p className="col-span-2 flex flex-col gap-2">
            <label htmlFor="Date" className="mx-1 font-semibold">
              Date
            </label>
            <input
              type="text"
              id="Date"
              className="p-2 bg-slate-900 rounded-lg"
              {...register("Date", { required: true })}
            />
          </p>

          <p className="col-span-2 flex flex-col gap-2">
            <label htmlFor="Title" className="mx-1 font-semibold">
              Title
            </label>
            <input
              type="text"
              id="Title"
              className="p-2 bg-slate-900 rounded-lg"
              {...register("Title", { required: true })}
            />
          </p>

          <p className="col-span-2 flex flex-col gap-2">
            <label htmlFor="Foundation" className="mx-1 font-semibold">
              Foundation
            </label>
            <input
              type="text"
              id="Foundation"
              className="p-2 bg-slate-900 rounded-lg"
              {...register("Foundation", { required: true })}
            />
          </p>

          <p className="col-span-2 flex flex-col gap-2">
            <label htmlFor="Description" className="mx-1 font-semibold">
              Description
            </label>
            <textarea
              id="Description"
              className="p-2 bg-slate-900 rounded-lg h-20"
              {...register("Description", { required: true })}
            />
          </p>

          <p className="col-span-2 flex flex-col gap-2">
            <label htmlFor="Icon" className="mx-1 font-semibold">
              Icon
            </label>
            <select
              {...register("Icon", { required: true })}
              className="p-2 bg-slate-900 rounded-lg"
            >
              <option value="Education">Education</option>
              <option value="Development">Development</option>
              <option value="Programming">Programming</option>
            </select>
          </p>

          <p className="col-span-2 flex flex-col gap-2">
            <label htmlFor="Card Position" className="mx-1 font-semibold">
              Card Position
            </label>
            <p className="flex gap-3">
              <p className="flex gap-2">
                <input
                  type="radio"
                  value="left"
                  {...register("Position", { required: true })}
                />
                <label htmlFor="left">left</label>
              </p>
              <p className="flex gap-2">
                <input
                  type="radio"
                  value="right"
                  {...register("Position", { required: true })}
                />
                <label htmlFor="right">right</label>
              </p>
            </p>
          </p>

          <div className="flex items-center justify-end col-span-2 gap-4 ">
            <button
              onClick={handleTriggerOpenAddExperience}
              className="bg-red-700 hover:bg-red-800 transition-all duration-300 cursor-pointer text-white font-semibold w-20 py-1 rounded-lg"
            >
              Cancel
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 transition-all duration-300 cursor-pointer text-white font-semibold w-20 py-1 rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddExperienceModel;
