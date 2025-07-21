import { useMutation } from "@tanstack/react-query";
import useGetUser from "../../Portfolio/Hooks/useGetUser";
import { experienceService } from "../../../Api/Experience/ExperienceService";
import useGetExperience from "./useGetExperience";
import { useForm } from "react-hook-form";
import { useOpenExperienceContext } from "../Context/OpenAddExperience";

const useAddExperience = () => {
  const { User } = useGetUser();
  const { refetch } = useGetExperience();
  const { register, handleSubmit } = useForm();
  const { handleTriggerOpenAddExperience } = useOpenExperienceContext();
  const { mutate } = useMutation({
    mutationKey: ["createExperience", [User?.id]],
    mutationFn: experienceService.CreateData,
    onSuccess: () => {
      refetch();
      handleTriggerOpenAddExperience();
    },
  });

  const handleAddExperience = (data: any) => {
    mutate({
      ...data,
      user_id: User?.id,
    });
  };

  return { register, handleAddExperience, handleSubmit };
};

export default useAddExperience;
