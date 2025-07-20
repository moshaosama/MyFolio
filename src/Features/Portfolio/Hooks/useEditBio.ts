import { useMutation } from "@tanstack/react-query";
import { dataUserIdService } from "../../../Api/DataByUserId/DataUserIdService";
import { useForm } from "react-hook-form";
import useGetUser from "./useGetUser";
import { useEffect, useState } from "react";

const useEditBio = () => {
  const { User } = useGetUser();
  const {
    register: registerBio,
    handleSubmit: handleSubmitBio,
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      Bio: "",
    },
  });

  useEffect(() => {
    if (User?.Bio) {
      reset({ Bio: User.Bio });
    }
  }, []);

  const [isOpenEditBio, setIsOpenEditBio] = useState(false);

  const { mutate: handleEditBioMutate } = useMutation({
    mutationKey: ["EditBio"],
    mutationFn: dataUserIdService.EditBio,
    onSuccess: async (data) => {
      setIsOpenEditBio(false);
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
