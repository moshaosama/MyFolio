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
  }, [User?.Bio]);

  const [isOpenEditBio, setIsOpenEditBio] = useState(false);

  const { mutate: handleEditBioMutate } = useMutation({
    mutationKey: ["EditBio"],
    mutationFn: dataUserIdService.EditBio,
    onSuccess: async (data) => {
      try {
        const updatedUser = data?.user?.[0];
        if (updatedUser) {
          localStorage.setItem("User", JSON.stringify(updatedUser));
        }
        setIsOpenEditBio(false);
      } catch (err) {
        console.error("Failed to update localStorage with new user data", err);
      }
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
