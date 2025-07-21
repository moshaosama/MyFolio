import { FiEdit } from "react-icons/fi";
import cn from "../libs/cn";
import Container from "../Styles";
import { FaCheck } from "react-icons/fa";
import { useOpenSkillContext } from "../Features/Skills/Context/OpenEditSkillContext";

interface SectionHeaderProps {
  Title: string;
  Description: string;
  id: string;
  isBtn: boolean;
}

const SectionHeader = ({
  Description,
  Title,
  id,
  isBtn,
}: SectionHeaderProps) => {
  const { handleTriggerOpenEditModel, isOpenEditModel } = useOpenSkillContext();
  return (
    <div
      id={id}
      className={cn(
        Container,
        "flex flex-col gap-2  py-5 justify-center items-center"
      )}
    >
      <h1
        className="bg-gradient-to-l from-blue-600  to-purple-600 to-80% bg-clip-text text-transparent text-6xl max-sm:text-5xl font-bold"
        style={{ textShadow: "6px 10px 90px #155dfc" }}
      >
        {Title}
      </h1>

      {isBtn &&
        (isOpenEditModel ? (
          <div className="my-10 flex justify-end w-full">
            <button
              onClick={handleTriggerOpenEditModel}
              className="bg-green-500 text-white flex justify-center items-center gap-3 font-bold p-3 rounded-2xl hover:bg-green-600 cursor-pointer transition-all duration-300 mx-20"
            >
              <FaCheck />
              Done Edititng
            </button>
          </div>
        ) : (
          <div className="my-10 flex justify-end w-full">
            <button
              onClick={handleTriggerOpenEditModel}
              className="bg-blue-500 text-white flex items-center gap-3 justify-center font-bold  p-3 rounded-2xl hover:bg-blue-600 cursor-pointer transition-all duration-300 mx-20"
            >
              <FiEdit />
              Edit Skills
            </button>
          </div>
        ))}

      <p className="text-xl font-semibold text-center text-gray-500 w-[55pc] max-sm:w-full">
        {Description}
      </p>
    </div>
  );
};

export default SectionHeader;
