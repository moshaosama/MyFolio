import { CgClose } from "react-icons/cg";
import { LuBot } from "react-icons/lu";
import useOpenChatBot from "../Hooks/useOpenChatBot";
import { SyncLoader } from "react-spinners";

const PopUpChat = () => {
  const {
    handleTriggerChatBot,
    isOpenChatBot,
    handleStartChat,
    isResponse,
    register,
    handleSubmit,
    handleSendMessage,
    StartChat,
    SendMessages,
    ChatMessage,
  } = useOpenChatBot();

  return (
    <>
      <div>
        {!isOpenChatBot && (
          <button
            onClick={() => {
              handleTriggerChatBot();
              handleStartChat();
            }}
            className="fixed bottom-10 right-10 w-12 h-12 rounded-full flex justify-center items-center bg-blue-600 text-white hover:bg-blue-800 cursor-pointer transition-all duration-300"
          >
            <LuBot size={30} />
          </button>
        )}

        {isOpenChatBot && (
          <div className="border-2 rounded-xl z-50  text-white fixed right-10 max-sm:right-2 bottom-24 border-gray-500 w-[30pc] max-sm:w-[25pc] overflow-y-scroll h-[30pc]">
            <div className="bg-black rounded-t-lg">
              <div className="mx-3  flex justify-between items-center py-4">
                <div>
                  <h1 className="text-2xl font-bold">FolioBot</h1>
                </div>
                <div onClick={handleTriggerChatBot}>
                  <CgClose size={20} className="cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="bg-gray-500 relative rounded-b-lg py-3 flex flex-col gap-5 h-[22pc] overflow-y-scroll ">
              <div className="flex flex-col gap-5">
                <div className="mx-3 max-sm:mx-0 bg-white relative left-0 text-black py-3 rounded-lg px-2 w-1/2">
                  <div>{JSON.parse(StartChat!)?.message}</div>
                </div>
                {SendMessages.length >= 1 &&
                  SendMessages?.map((message) => (
                    <div className="self-end bg-white mx-3 text-black py-3 rounded-lg px-2 w-1/2">
                      <h1>{message.message}</h1>
                    </div>
                  ))}
                {isResponse ? (
                  <SyncLoader />
                ) : (
                  ChatMessage.length >= 2 &&
                  ChatMessage?.slice(1)?.map((message) => (
                    <div className="self-start mx-3 bg-white text-black py-3 rounded-lg px-2 w-1/2">
                      <h1>{message.message}</h1>
                    </div>
                  ))
                )}
              </div>{" "}
            </div>
            <form
              className="fixed bottom-[6.5pc] w-[28pc] max-sm:w-[23pc] bg-black"
              onSubmit={handleSubmit(handleSendMessage)}
            >
              <p className="flex gap-3 mx-1">
                <input
                  type="text"
                  placeholder="Enter Your text.."
                  className="py-3 px-2 text-black bg-white rounded-lg w-full"
                  {...register("message", { required: true })}
                />
                <button className="bg-green-500 rounded-xl font-bold cursor-pointer hover:bg-green-700 transition-all duration-300 w-20">
                  Send
                </button>
              </p>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default PopUpChat;
