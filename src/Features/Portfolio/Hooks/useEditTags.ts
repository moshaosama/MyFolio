import { useMutation } from "@tanstack/react-query";
import { dataUserIdService } from "../../../Api/DataByUserId/DataUserIdService";
import useGetUser from "./useGetUser";
import { useForm } from "react-hook-form";

import { useOpenEditTagsContext } from "../Context/EditTagsModelContext";

const useEditTags = () => {
  const { User } = useGetUser();
  const { TriggerOpenEditTags } = useOpenEditTagsContext();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      Tags:
        User?.Tags != null
          ? JSON.parse(JSON.parse(User?.Tags))
          : ["Front-End Developer"],
    },
  });

  const { mutateAsync: handleEditTagsMutate } = useMutation({
    mutationKey: ["editTags"],
    mutationFn: dataUserIdService.EditTags,
    onSuccess: async (data: any) => {
      await window.localStorage.setItem("User", JSON.stringify(data?.user[0]));

      TriggerOpenEditTags();
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
