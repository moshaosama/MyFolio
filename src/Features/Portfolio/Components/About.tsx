import { CiShare1 } from "react-icons/ci";
import useGetAnimationText from "../../../Hooks/useGetAnimationText";
import useGetUser from "../Hooks/useGetUser";
import PopUpEditTags from "./PopUpEditTags";
import { useOpenEditTagsContext } from "../Context/EditTagsModelContext";

const About = () => {
  const { User } = useGetUser();
  console.log(JSON.parse(User?.Tags));

  const { startText } = useGetAnimationText(JSON.parse(User?.Tags));

  const { isOpenEditTags, TriggerOpenEditTags } = useOpenEditTagsContext();
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
          <input
            value={User?.Name}
            className="text-5xl font-extrabold bg-gradient-to-l bg-clip-text w-[26pc] from-[#2a7b9b] to-[#57c785] text-transparent focus:outline-0 focus:border-b-2 focus:border-b-purple-400 wrap-break-word"
          />

          <div className="cursor-pointer">
            <CiShare1 color="white" size={30} />
          </div>
        </div>
      </div>

      {isOpenEditTags && <PopUpEditTags />}
    </>
  );
};

export default About;
