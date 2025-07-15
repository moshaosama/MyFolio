import type { ReactElement, ReactNode } from "react";
import React from "react";
import { CgClose } from "react-icons/cg";
import { useOpenPopUpSupportContext } from "../Features/Home/Context/useOpenPopUpSupport";

type FooterType = string | ReactElement;

interface PopUpCardProp {
  Title: string;
  description: string;
  children: ReactNode;
  Footer: FooterType;
  width: string;
}

const PopUpCard = ({
  Footer,
  Title,
  children,
  description,
  width,
}: PopUpCardProp) => {
  const { triggerOpenPopUp } = useOpenPopUpSupportContext();
  return (
    <div className="fixed top-0 inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div
        className="bg-slate-800 rounded-xl max-sm:mx-2"
        style={{ width: width }}
      >
        <div className="border-b-1 border-b-gray-500 py-5">
          <div className="flex justify-between items-center mx-5">
            <div className="text-white flex flex-col">
              <h1 className="text-2xl font-bold">{Title}</h1>
              <p className="text-gray-400">{description}</p>
            </div>
            <div onClick={triggerOpenPopUp}>
              <CgClose size={20} color="white" className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return <div className="p-4">{child}</div>;
            }
            return child;
          })}
        </div>

        {/* footer */}
        <div className="border-t-1 text-white border-t-gray-500 py-5">
          <div className=" text-center flex justify-center mx-6">
            <h1>{Footer}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpCard;
