import { CiShare1 } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import LinksIcons from "../../../Components/LinksIcons";
import { useOpenEditTagsContext } from "../Context/EditTagsModelContext";
import EditLinksModels from "./EditLinksModels";
import useGetUser from "../Hooks/useGetUser";

const Links = () => {
  const { TriggerOpenEditResume } = useOpenEditTagsContext();
  const { User } = useGetUser();
  return (
    <>
      <div className="flex max-sm:flex-col max-sm:justify-center items-center justify-between">
        <button className="group relative bg-gradient-to-l p-5 w-60 text-white hover:shadow-lg shadow-[#2a7b9b] hover:scale-105 transition-all duration-300 font-bold rounded-xl cursor-pointer  text-lg my-10 from-[#2a7b9b] to-[#57c785]">
          <a href={User?.ResumeLink}>
            <div className="flex gap-4 items-center justify-center">
              <p>View My Resume</p>
              <i>
                <GoArrowRight />
              </i>
            </div>
          </a>

          <i
            onClick={TriggerOpenEditResume}
            className="absolute hidden group-hover:block -right-4 -top-6"
          >
            <CiShare1 color="white" size={25} className="cursor-pointer" />
          </i>
        </button>
        <LinksIcons />
        <EditLinksModels />
      </div>
    </>
  );
};

export default Links;
