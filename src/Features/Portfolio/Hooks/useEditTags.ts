import { useMutation } from "@tanstack/react-query";
import { dataUserIdService } from "../../../Api/DataByUserId/DataUserIdService";
import useGetUser from "./useGetUser";
import { useForm } from "react-hook-form";

const useEditTags = () => {
  const { User } = useGetUser();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      Tags:
        User?.Tags != null
          ? JSON.parse(User.Tags)
          : ["Front End Developer", "Back End Developer"],
    },
  });

  const { mutateAsync: handleEditTagsMutate } = useMutation({
    mutationKey: ["editTags"],
    mutationFn: dataUserIdService.EditTags,
    onSuccess: async (data) => {
      const user = data?.user[0];
      user.Tags = JSON.parse(user.Tags);
      await window.localStorage.setItem("User", JSON.stringify(user));
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
