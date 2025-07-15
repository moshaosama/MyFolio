import { IoColorPaletteOutline } from "react-icons/io5";
import PopUpCard from "../../../Components/PopUpCard";

const PopUpTemplates = () => {
  return (
    <>
      <PopUpCard
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
        <div className="flex items-center gap-6">
          <div className="w-72 bg-slate-700 hover:scale-[1.02] transition-all duration-300 rounded-xl">
            <div>
              <img
                src="https://selfolio8.netlify.app/assets/templateOnePreview-BzxumhGX.png"
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
              <button className="bg-gradient-to-l py-2 rounded-xl cursor-pointer from-purple-600 hover:from-purple-800 to-blue-600 hover:to-blue-800 transition-all duration-300">
                Use Template
              </button>
            </div>
          </div>

          <div className="w-72 bg-gradient-to-l  from-purple-600/20  to-blue-600/20 hover:scale-[1.02] transition-all duration-300 rounded-xl">
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
    </>
  );
};

export default PopUpTemplates;
