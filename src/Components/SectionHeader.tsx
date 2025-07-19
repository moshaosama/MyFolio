import cn from "../libs/cn";
import Container from "../Styles";

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
  return (
    <div
      id={id}
      className={cn(
        Container,
        "flex flex-col gap-2  py-5 justify-center items-center"
      )}
    >
      <h1
        className="bg-gradient-to-l from-blue-600  to-purple-600 to-80% bg-clip-text text-transparent text-6xl font-bold"
        style={{ textShadow: "6px 10px 90px #155dfc" }}
      >
        {Title}
      </h1>

      {isBtn && (
        <div className="my-10 flex justify-end w-full">
          <button className="bg-blue-500 text-white font-bold w-32 py-3 rounded-2xl hover:bg-blue-600 cursor-pointer transition-all duration-300 mx-20">
            EditSkill
          </button>
        </div>
      )}

      <p className="text-xl font-semibold text-center text-gray-500 w-[55pc] max-sm:w-full">
        {Description}
      </p>
    </div>
  );
};

export default SectionHeader;
