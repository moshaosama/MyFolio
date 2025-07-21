import { MdDelete } from "react-icons/md";
import useNavbarLinks from "../../../Hooks/useNavbarLinks";

const NavbarTemplate = () => {
  const { NavbarLinks, handleDeleteLink } = useNavbarLinks();
  const rawLinks = NavbarLinks?.result?.[0]?.Links;

  let links: any[] = [];

  try {
    links = typeof rawLinks === "string" ? JSON.parse(rawLinks) : rawLinks;
  } catch (err) {
    console.error("Failed to parse links", err);
  }

  return (
    <>
      <div className="bg-[#0f0d14] max-sm:hidden w-full relative  flex justify-center gap-5">
        <div className="flex justify-center gap-20 py-4 px-14 my-4 rounded-full sticky top-0 bg-[#211f2a]">
          {links?.map((data: { name: string; to: string }, index: number) => (
            <a href={data.to} key={index}>
              <div className="text-gray-500 flex group">
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
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarTemplate;
