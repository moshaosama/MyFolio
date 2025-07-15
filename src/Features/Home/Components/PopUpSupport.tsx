import { useState } from "react";
import PopUpCard from "../../../Components/PopUpCard";
import cn from "../../../libs/cn";
import { useOpenPopUpSupportContext } from "../Context/useOpenPopUpSupport";
import { FaCheck } from "react-icons/fa";

const PopUpSupport = () => {
  const { isOpen } = useOpenPopUpSupportContext();

  const [isCopyMobile, setIsCopyMobile] = useState(false);
  const [isCopyEmail, setIsCopyEmail] = useState(false);

  const triggerCopyMobile = () => {
    setIsCopyMobile(true);

    setTimeout(() => {
      setIsCopyMobile(false);
    }, 2000);
  };

  const triggerCopyEmail = () => {
    setIsCopyEmail(true);

    setTimeout(() => {
      setIsCopyEmail(false);
    }, 2000);
  };
  return (
    <>
      <div
        className={cn(
          isOpen
            ? "opacity-100 z-10 max-h-screen"
            : "opacity-0 z-0 max-h-0 hidden",
          "transition-all duration-300"
        )}
      >
        <PopUpCard
          Footer="
Thank you for supporting Selfolio! Your contribution helps us maintain and improve this free tool."
          Title="Support Selfolio"
          description="Help us keep this tool free and improve it"
          width="28pc"
        >
          <div className="bg-slate-700 transition-all duration-300 hover:scale-[1.03] flex flex-col gap-4 text-white rounded-xl p-4">
            <div className="flex items-center gap-5 mx-4">
              <div>
                <h1 className="text-2xl">💳</h1>
              </div>
              <div>
                <h1 className="text-md font-bold">Airtm</h1>
                <p className="text-gray-300 text-sm">Send support via Airtm</p>
              </div>
            </div>

            <div className="bg-gray-600 p-4 rounded-xl">
              <h1>mohamedOSFekry@gmail.com</h1>
            </div>

            <div
              onClick={() => {
                navigator.clipboard.writeText("mohamedOSFekry@gmail.com");
                triggerCopyEmail();
              }}
              className="bg-gradient-to-l p-3 text-center  rounded-xl to-blue-500 from-blue-300 cursor-pointer hover:to-blue-600 hover:from-blue-400"
            >
              <h1 className="font-bold">
                {isCopyEmail ? (
                  <i className="flex items-center gap-5 justify-center">
                    <FaCheck /> Copied!
                  </i>
                ) : (
                  "📋 Copy Airtm Account"
                )}
              </h1>
            </div>
          </div>

          <div className="bg-slate-700 transition-all duration-300 hover:scale-[1.03] flex flex-col gap-4 text-white rounded-xl p-4">
            <div className="flex items-center gap-5 mx-4">
              <div>
                <h1 className="text-2xl">📱</h1>
              </div>
              <div>
                <h1 className="text-md font-bold">Vodafone Cash</h1>
                <p className="text-gray-300 text-sm">
                  Send support via Vodafone Cash
                </p>
              </div>
            </div>

            <div className="bg-gray-600 p-4 rounded-xl">
              <h1>+20 1004365707</h1>
            </div>

            <div
              onClick={() => {
                navigator.clipboard.writeText("+20 1004365707");
                triggerCopyMobile();
              }}
              className="bg-gradient-to-l p-3 text-center  rounded-xl to-purple-800 from-puto-purple-700 cursor-pointer hover:to-purple-900 hover:from-puto-purple-800"
            >
              <h1 className="font-bold">
                {isCopyMobile ? (
                  <i className="flex items-center gap-5 justify-center">
                    <FaCheck /> Copied!
                  </i>
                ) : (
                  "📋 Copy Vodafone Cash Account"
                )}
              </h1>
            </div>
          </div>
        </PopUpCard>
      </div>
    </>
  );
};

export default PopUpSupport;
