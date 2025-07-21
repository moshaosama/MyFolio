import { CiShare1 } from "react-icons/ci";
import useGetAnimationText from "../../../Hooks/useGetAnimationText";
import useGetUser from "../Hooks/useGetUser";
import PopUpEditTags from "./PopUpEditTags";
import { useOpenEditTagsContext } from "../Context/EditTagsModelContext";
import useEditname from "../Hooks/useEditname";
import Bio from "./Bio";
import Links from "./Links";

const About = () => {
  const { User } = useGetUser();

  let parsedTags: string[] = [];

  // try {
  //   if (User?.Tags) {
  //     parsedTags = JSON.parse(JSON.parse(User.Tags));
  //   }
  // } catch (err) {
  //   console.error("Error parsing Tags", err);
  // }

  try {
    if (User?.Tags) {
      parsedTags = JSON.parse(User.Tags);
    }
  } catch (err) {
    console.error("Error parsing Tags", err);
  }

  const { startText } = useGetAnimationText(parsedTags);
  const { isOpenEditTags, TriggerOpenEditTags } = useOpenEditTagsContext();
  const { register, handlEditName, handleSubmit } = useEditname();
  return (
    <>
      <div
        id="about"
        className="relative text-white p-2 px-4 font-bold text-lg bg-black w-48 rounded-full "
      >
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
              className="text-5xl max-sm:text-3xl font-extrabold bg-gradient-to-l bg-clip-text w-[26pc] max-sm:w-full from-[#2a7b9b] to-[#57c785] text-transparent focus:outline-0 focus:border-b-2 focus:border-b-purple-400 wrap-break-word"
            />
          </form>

          <div className="cursor-pointer">
            <CiShare1 color="white" size={30} />
          </div>
        </div>
      </div>

      <div className="bg-green-500 h-2 relative w-[20%] overflow-hidden mt-5 rounded-full">
        <div className="bg-blue-500 absolute top-0 left-0 h-2 animate-expand rounded-full"></div>
      </div>
      <Bio />
      <Links />

      {isOpenEditTags && <PopUpEditTags />}
    </>
  );
};

export default About;
