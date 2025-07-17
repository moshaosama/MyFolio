import { useMutation, useQuery } from "@tanstack/react-query";
import { dataUserIdService } from "../../../Api/DataByUserId/DataUserIdService";
import useGetUser from "./useGetUser";
import { useForm } from "react-hook-form";
import { userService } from "../../../Api/User/UserService";

const useEditTags = () => {
  const { User } = useGetUser();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      Tags:
        User?.Tags != null
          ? JSON.parse(JSON.parse(User?.Tags))
          : ["Front-End Developer"],
    },
  });

  const { data: GetUser, refetch } = useQuery({
    queryKey: ["getUser"],
    queryFn: () => userService.GetData(User?.id),
    enabled: !!User?.id,
  });

  const { mutateAsync: handleEditTagsMutate } = useMutation({
    mutationKey: ["editTags"],
    mutationFn: dataUserIdService.EditTags,
    onSuccess: async () => {
      await window.localStorage.setItem(
        "User",
        JSON.stringify(GetUser?.user?.[0])
      );
      refetch();
    },
  });

  const handleEditTags = async (data: any) => {
    const tagsArray =
      typeof data?.Tags === "string"
        ? data.Tags.split(",").map((tag: string) => tag.trim())
        : data.Tags;

    await handleEditTagsMutate({
      Tags: JSON.stringify(tagsArray),
      userId: User?.id,
    });
  };

  let tagsValue = getValues("Tags");

  return { handleEditTags, register, handleSubmit, tagsValue };
};

export default useEditTags;
