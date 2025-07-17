import { useMutation } from "@tanstack/react-query";
import { dataUserIdService } from "../../../Api/DataByUserId/DataUserIdService";
import useGetUser from "./useGetUser";
import { useForm } from "react-hook-form";

const useEditname = () => {
  const { User } = useGetUser();
  const { register, handleSubmit } = useForm({
    defaultValues: User?.Name,
  });
  const { mutate: handleEditNameMutation } = useMutation({
    mutationKey: ["editName"],
    mutationFn: dataUserIdService.EditName,
    onSuccess: async (data) => {
      await window.localStorage.setItem("User", JSON.stringify(data?.user[0]));
    },
  });

  const handlEditName = (data: any) => {
    handleEditNameMutation({
      Name: data.Name,
      userId: User?.id,
    });
  };

  return { register, handlEditName, handleSubmit };
};

export default useEditname;
