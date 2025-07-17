import { useMutation } from "@tanstack/react-query";
import { dataUserIdService } from "../../../Api/DataByUserId/DataUserIdService";
import { useForm } from "react-hook-form";
import useGetUser from "./useGetUser";
import { useState } from "react";

const useEditBio = () => {
  const { User } = useGetUser();
  const {
    register: registerBio,
    handleSubmit: handleSubmitBio,
    getValues,
  } = useForm({
    defaultValues: {
      Bio: User?.Bio,
    },
  });
  const [isOpenEditBio, setIsOpenEditBio] = useState(false);
  const { mutate: handleEditBioMutate } = useMutation({
    mutationKey: ["EditBio"],
    mutationFn: dataUserIdService.EditBio,
    onSuccess: async (data) => {
      await window.localStorage.setItem("User", JSON.stringify(data?.user[0]));
    },
  });
  const handleOpenBioModel = () => {
    setIsOpenEditBio(true);
  };

  const handleEditBio = (data: any) => {
    handleEditBioMutate({
      Bio: data?.Bio,
      userId: User.id,
    });
  };

  const DefaultValueBio = getValues("Bio");

  return {
    registerBio,
    handleSubmitBio,
    handleEditBio,
    isOpenEditBio,
    handleOpenBioModel,
    DefaultValueBio,
  };
};

export default useEditBio;
