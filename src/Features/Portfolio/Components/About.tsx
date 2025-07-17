import { CiShare1 } from "react-icons/ci";
import useGetAnimationText from "../../../Hooks/useGetAnimationText";
import useGetUser from "../Hooks/useGetUser";
import PopUpEditTags from "./PopUpEditTags";
import { useOpenEditTagsContext } from "../Context/EditTagsModelContext";
import useEditname from "../Hooks/useEditname";
import useEditBio from "../Hooks/useEditBio";
import cn from "../../../libs/cn";

const About = () => {
  const { User } = useGetUser();
  const { startText } = useGetAnimationText(JSON.parse(JSON.parse(User?.Tags)));
  const { isOpenEditTags, TriggerOpenEditTags } = useOpenEditTagsContext();
  const { register, handlEditName, handleSubmit } = useEditname();
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
      <div className="relative text-white p-2 px-4 font-bold text-lg bg-black w-48 rounded-full ">
        <div
          onClick={TriggerOpenEditTags}
          className="absolute top-0 -left-1 cursor-pointer"
        >
          <CiShare1 />
        </div>
        <h1 className="text-sm">✨ {startText}</h1>
      </div>

      <div className="mt-3">
        <h1 className="text-white text-4xl font-bold">Hello I am</h1>
        <div className="w-96 flex break-words mt-2">
          <form>
            <input
              defaultValue={User?.Name}
              {...register("Name", { required: true })}
              onMouseLeave={handleSubmit(handlEditName)}
              className="text-5xl font-extrabold bg-gradient-to-l bg-clip-text w-[26pc] from-[#2a7b9b] to-[#57c785] text-transparent focus:outline-0 focus:border-b-2 focus:border-b-purple-400 wrap-break-word"
            />
          </form>

          <div className="cursor-pointer">
            <CiShare1 color="white" size={30} />
          </div>
        </div>
      </div>

      <div
        onClick={handleOpenBioModel}
        className={cn(
          "mt-3 text-white  cursor-pointer w-[40pc] p-3",
          !isOpenEditBio && "hover:border-2"
        )}
      >
        {isOpenEditBio ? (
          <form onSubmit={handleSubmitBio(handleEditBio)}>
            <textarea
              defaultValue={DefaultValueBio}
              className="w-[40pc] border-2 h-28 p-2"
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

      {isOpenEditTags && <PopUpEditTags />}
    </>
  );
};

export default About;
