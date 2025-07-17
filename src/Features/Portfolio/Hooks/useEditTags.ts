import { useMutation, useQuery } from "@tanstack/react-query";
import { dataUserIdService } from "../../../Api/DataByUserId/DataUserIdService";
import { userService } from "../../../Api/User/UserService";
import useGetUser from "./useGetUser";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const useEditTags = () => {
  const { User } = useGetUser();
  const { data: DataUser } = useQuery({
    queryKey: ["getUserByid"],
    queryFn: () => userService.GetData(User?.id),
  });
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      Tags: ["Front End Developer"],
    },
  });

  const { mutateAsync: handleEditTagsMutate } = useMutation({
    mutationKey: ["editTags"],
    mutationFn: dataUserIdService.EditTags,
  });

  const handleEditTags = async (data: any) => {
    handleEditTagsMutate({
      Tags: data,
      userId: User?.id,
    });
    await window.localStorage.setItem(
      "User",
      JSON.stringify(DataUser?.user[0])
    );
  };

  let tagsValue = getValues("Tags");

  return { handleEditTags, register, handleSubmit, tagsValue };
};

export default useEditTags;
