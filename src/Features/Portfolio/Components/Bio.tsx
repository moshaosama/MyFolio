import cn from "../../../libs/cn";
import useEditBio from "../Hooks/useEditBio";
import useGetUser from "../Hooks/useGetUser";

const Bio = () => {
  const { User } = useGetUser();
  const {
    isOpenEditBio,
    handleOpenBioModel,
    DefaultValueBio,
    registerBio,
    handleEditBio,
    handleSubmitBio,
  } = useEditBio();
  return (
    <>
      <div
        onClick={handleOpenBioModel}
        className={cn(
          "mt-3 text-white  cursor-pointer w-[40pc] max-sm:w-full p-3",
          !isOpenEditBio && "hover:border-2"
        )}
      >
        {isOpenEditBio ? (
          <form onSubmit={handleSubmitBio(handleEditBio)}>
            <textarea
              defaultValue={DefaultValueBio}
              className="w-[40pc] max-sm:w-full border-2 h-28 p-2"
              {...registerBio("Bio", { required: true })}
            />
            <p className="w-full mx-8 flex justify-end">
              <button className="w-20 py-1 rounded-xl hover:bg-blue-700 transition-all duration-300 cursor-pointer bg-blue-500">
                Save
              </button>
            </p>
          </form>
        ) : (
          <p>{User?.Bio}</p>
        )}
      </div>
    </>
  );
};

export default Bio;
