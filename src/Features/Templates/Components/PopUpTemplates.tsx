import { IoColorPaletteOutline } from "react-icons/io5";
import PopUpCard from "../../../Components/PopUpCard";
import { useOpenPopUpTemplateContext } from "../Context/useOpenPopUpTemplate";
import cn from "../../../libs/cn";
import useCreateUser from "../../Home/Hooks/useCreateUser";

const PopUpTemplates = () => {
  const { isOpen, triggerOpenPopUp } = useOpenPopUpTemplateContext();
  const { handleCreateUser } = useCreateUser();
  return (
    <div
      className={cn(
        isOpen
          ? "opacity-100 z-10 max-h-screen"
          : "opacity-0 z-0 max-h-0 hidden",
        "transition-all duration-300"
      )}
    >
      <PopUpCard
        onCLick={triggerOpenPopUp}
        Title="Choose a Template"
        description="Select a template to start building your portfolio"
        width="60pc"
        Footer={
          <div className="text-white flex flex-col gap-3">
            <h1 className=" font-bold text-3xl">More Templates Coming Soon</h1>
            <p className="text-gray-500">
              We're working on more beautiful templates. Stay tuned for updates!
            </p>
          </div>
        }
      >
        <div className="flex max-sm:flex-col max-sm:gap-7 max-sm:overflow-y-scroll max-sm:h-[30pc] items-center gap-6">
          <div className="w-72 bg-slate-700 max-sm:w-full hover:scale-[1.02] transition-all duration-300 rounded-xl">
            <div>
              <img
                src="/Screenshot (195).png"
                alt="template.png"
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="text-white p-4 flex flex-col gap-2">
              <h1 className="text-lg font-bold">Modern Portfolio</h1>
              <p className="text-gray-300">
                A clean, modern portfolio template with smooth animations and
                professional design
              </p>

              <button onClick={handleCreateUser} className="cursor-pointer">
                Use Template
              </button>
            </div>
          </div>

          <div className="w-72 bg-gradient-to-l max-sm:w-full from-purple-600/20  to-blue-600/20 hover:scale-[1.02] transition-all duration-300 rounded-xl">
            <div className="bg-gradient-to-l rounded-t-xl h-32 from-purple-600  to-blue-600">
              <i className="flex justify-center opacity-30 items-center h-32">
                <IoColorPaletteOutline size={50} />
              </i>
            </div>
            <div className="text-white p-4 flex flex-col gap-2">
              <h1 className="text-lg font-bold">Custom Portfolio</h1>
              <p className="text-gray-300">
                Get a unique portfolio template designed specifically for your
                brand and requirements
              </p>
              <button className="bg-gradient-to-l py-2 rounded-xl cursor-pointer from-purple-600 hover:from-purple-800 to-blue-600 hover:to-blue-800 transition-all duration-300">
                💬 Contact for Custom Work
              </button>
            </div>
          </div>
        </div>
      </PopUpCard>
    </div>
  );
};

export default PopUpTemplates;
