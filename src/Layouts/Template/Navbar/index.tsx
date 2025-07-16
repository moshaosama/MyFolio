import { MdDelete } from "react-icons/md";
import useNavbarLinks from "../../../Hooks/useNavbarLinks";

const NavbarTemplate = () => {
  const { NavbarLinks, handleDeleteLink } = useNavbarLinks();
  const rawLinks = NavbarLinks?.result?.[0]?.Links;

  return (
    <>
      <div className="bg-[#0f0d14] w-full relative  flex justify-center gap-5">
        <div className="flex justify-center gap-20 py-4 px-14 my-4 rounded-full sticky top-0 bg-[#211f2a]">
          {rawLinks
            ? JSON.parse(rawLinks).map(
                (data: { name: string }, index: number) => (
                  <div className="text-gray-500 flex group" key={index}>
                    <h1 className="text-xl font-semibold hover:text-white transition-all duration-500 cursor-pointer">
                      {data.name}
                    </h1>
                    <i
                      onClick={() => handleDeleteLink(data.name)}
                      className="hidden hover:text-white transition-all duration-300 cursor-pointer group-hover:inline-block"
                    >
                      <MdDelete size={20} />
                    </i>
                  </div>
                )
              )
            : null}
        </div>
      </div>
    </>
  );
};

export default NavbarTemplate;
