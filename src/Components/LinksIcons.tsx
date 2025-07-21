import { CiShare1 } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import { useOpenEditTagsContext } from "../Features/Portfolio/Context/EditTagsModelContext";
import useGetUser from "../Features/Portfolio/Hooks/useGetUser";

const LinksIcons = () => {
  const {
    TriggerOpenEditGithub,
    TriggerOpenEditLinkedin,
    TriggerOpenEditMedium,
    TriggerOpenEditTwitter,
  } = useOpenEditTagsContext();
  const { User } = useGetUser();
  return (
    <>
      <div className="flex gap-5 mr-10">
        <i className="relative group">
          <a href={User?.GitHubLink}>
            <FaGithub
              size={45}
              color="white"
              className="hover:bg-[#d1d5dc52] transition-all duration-300 p-1 rounded-xl cursor-pointer"
            />
          </a>

          <i
            onClick={TriggerOpenEditGithub}
            className="absolute hidden max-sm:block group-hover:block -left-4 -top-6"
          >
            <CiShare1 color="white" size={25} className="cursor-pointer" />
          </i>
        </i>

        <i className="relative group">
          <a href={User?.LinkedInLink}>
            <FaLinkedin
              size={45}
              color="white"
              className="hover:bg-[#d1d5dc52] transition-all duration-300 p-1 rounded-xl cursor-pointer"
            />
          </a>

          <i
            onClick={TriggerOpenEditLinkedin}
            className="absolute hidden max-sm:block group-hover:block -left-4 -top-6"
          >
            <CiShare1 color="white" size={25} className="cursor-pointer" />
          </i>
        </i>

        <i className="relative group">
          <a href={User?.TwitterLink}>
            <FaTwitter
              size={45}
              color="white"
              className="hover:bg-[#d1d5dc52] transition-all duration-300 p-1 rounded-xl cursor-pointer"
            />
          </a>

          <i
            onClick={TriggerOpenEditTwitter}
            className="absolute hidden max-sm:block group-hover:block -left-4 -top-6"
          >
            <CiShare1 color="white" size={25} className="cursor-pointer" />
          </i>
        </i>

        <i className="relative group">
          <a href={User?.MediumLink}>
            <FaMedium
              size={45}
              color="white"
              className="hover:bg-[#d1d5dc52] transition-all duration-300 p-1 rounded-xl cursor-pointer"
            />
          </a>

          <i
            onClick={TriggerOpenEditMedium}
            className="absolute hidden max-sm:block group-hover:block -left-4 -top-6"
          >
            <CiShare1 color="white" size={25} className="cursor-pointer" />
          </i>
        </i>
      </div>
    </>
  );
};

export default LinksIcons;
