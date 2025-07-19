import { useForm, type UseFormRegister } from "react-hook-form";

interface EditLinkModelProps {
  Title: string;
  Label: string;
  DefaultValue: string;
  registerName: string;
  onCLick: () => void;
  onSubmit: () => void;
  register: UseFormRegister<any>;
}

const EditLinkModel = ({
  DefaultValue,
  Label,
  Title,
  onCLick,
  onSubmit,
  registerName,
  register,
}: EditLinkModelProps) => {
  return (
    <>
      <div className="bg-black/60 w-full h-[100vh] fixed flex justify-center items-center top-0 left-0">
        <div className="bg-slate-800 text-white shadow-2xl shadow-slate-800 w-[30pc]  p-4 rounded-xl">
          <h1 className="text-lg font-semibold">{Title}</h1>

          <form className="mt-4" onSubmit={onSubmit}>
            <p className="flex flex-col gap-2">
              <label htmlFor="" className="ml-1 text-gray-400">
                {Label}
              </label>
              <input
                type="text"
                className="bg-slate-900 rounded-lg py-3 px-3 text-white"
                defaultValue={DefaultValue}
                {...register(registerName as string)}
              />
            </p>

            <div className="mt-4 flex justify-end gap-7">
              <button
                onClick={onCLick}
                className="border-1 border-gray-400 p-3 w-28 rounded-xl hover:bg-gray-400 font-bold cursor-pointer transition-all duration-300"
              >
                Cancel
              </button>
              <button
                className=" p-3 w-28 rounded-xl font-bold cursor-pointer bg-gradient-to-l
                from-[#2a7b9b] hover:from-[#0e9cd4] to-[#57c785] hover:to-[#14d464]  transition-all duration-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditLinkModel;
