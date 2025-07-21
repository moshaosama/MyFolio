import type { ReactElement } from "react";
import { BiEdit } from "react-icons/bi";
import useOpenEditContact from "../Features/Contact/Hooks/useOpenEditContact";
import { useForm } from "react-hook-form";

interface ContactCardProps {
  Icon: ReactElement;
  Title: string;
  Value: string;
  isDescription: boolean;
  backGroundColor: string;
  id: unknown;
}

interface FormStateValue extends ContactCardProps {
  registerValue: string;
  handleCLick: any;
}

const ContactCard = ({
  Icon,
  Title,
  Value,
  isDescription,
  backGroundColor,
  id,
  handleCLick,
  registerValue,
}: FormStateValue) => {
  const { handleCloseEdit, handleOpenEdit, isOpenEditContact } =
    useOpenEditContact();
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div
        id={id as string}
        className="flex relative flex-col gap-10 rounded-xl w-full  hover:bg-slate-600/40 p-10 transition-all duration-300 justify-center items-center"
      >
        {isOpenEditContact === id ? null : (
          <div
            className="absolute top-3 right-3 max-sm:top-0 rounded-full  w-10 h-10  flex justify-center items-center cursor-pointer hover:bg-green-700"
            style={{
              backgroundColor: backGroundColor,
            }}
            onClick={() => handleOpenEdit(id as string)}
          >
            <BiEdit color="green" />
          </div>
        )}
        <i
          className=" rounded-full  w-20 h-20 flex justify-center items-center"
          style={{
            backgroundColor: backGroundColor,
          }}
        >
          {Icon}
        </i>

        <div className="flex justify-center flex-col items-center gap-3">
          <h1 className="text-xl font-bold text-white">{Title}</h1>
          {isOpenEditContact === id ? (
            <form action="" onSubmit={handleSubmit(handleCLick)}>
              <input
                type="text"
                defaultValue={Value}
                className="bg-slate-700 p-2 rounded-xl w-[15pc] text-white border-1 border-white"
                {...register(registerValue, { required: true })}
              />
              <div className="flex justify-center mt-2 gap-2">
                <button className="w-20 py-1 rounded-lg font-bold bg-green-700 hover:bg-green-900 transition-all duration-300 text-white text-center">
                  Save
                </button>
                <button
                  onClick={handleCloseEdit}
                  className="w-20 py-1 rounded-lg font-bold bg-red-700 hover:bg-red-900 transition-all duration-300 text-white text-center"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <p className="text-gray-200">{Value}</p>
          )}
          {isDescription && (
            <p className="text-gray-400 text-sm text-center">
              Available for remote work worldwide
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactCard;
