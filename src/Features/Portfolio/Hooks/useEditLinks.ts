import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { dataUserIdService } from "../../../Api/DataByUserId/DataUserIdService";
import useGetUser from "./useGetUser";
import { userService } from "../../../Api/User/UserService";

const useEditLinks = () => {
  const { register, handleSubmit } = useForm();
  const { User } = useGetUser();

  const { refetch } = useQuery({
    queryKey: ["getUser"],
    queryFn: () => userService.GetData(User?.id),
    enabled: !!User?.id,
  });
  const { mutate: handleEditLinksMutate } = useMutation({
    mutationKey: ["EditLink"],
    mutationFn: dataUserIdService.EditLinks,
    onSuccess: async () => {
      const newUser = await refetch();
      await window.localStorage.setItem(
        "User",
        JSON.stringify(newUser?.data?.user[0])
      );
    },
  });

  const handleEditLinks = (data: any) => {
    handleEditLinksMutate({
      value: Object.entries(data)[Object.entries(data).length - 1][1],
      Field: Object.entries(data)[Object.entries(data).length - 1][0],
      userId: User?.id,
    });
  };

  return { register, handleEditLinks, handleSubmit };
};

export default useEditLinks;
