import { useOpenEditTagsContext } from "../Context/EditTagsModelContext";
import useEditTags from "../Hooks/useEditTags";

const PopUpEditTags = () => {
  const { tagsValue } = useEditTags();
  const { TriggerOpenEditTags } = useOpenEditTagsContext();
  const { register, handleSubmit, handleEditTags } = useEditTags();
  return (
    <>
      <div className="fixed flex justify-center items-center h-full inset-0 top-0 w-full bg-black/60">
        <div className="bg-slate-800 w-96 p-2 px-8 rounded-xl text-white">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Edit Tags</h1>
              <p className="text-slate-500">Enter tags separated by commas:</p>
            </div>
            <form onSubmit={handleSubmit(handleEditTags)}>
              <textarea
                className="border-1 h-20 w-full p-2 border-gray-500 rounded-xl"
                defaultValue={tagsValue}
                {...register("Tags", { required: true })}
              />

              <p className="flex justify-end  gap-4 my-2">
                <button
                  onClick={TriggerOpenEditTags}
                  className="bg-gray-600 p-2 rounded-xl cursor-pointer hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button className="bg-blue-500 p-2 rounded-xl cursor-pointer hover:bg-blue-600">
                  Save Changes
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpEditTags;
