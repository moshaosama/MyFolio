import { useMutation } from "@tanstack/react-query";
import useGetExperience from "./useGetExperience";
import { experienceService } from "../../../Api/Experience/ExperienceService";

const useDeleteExperience = () => {
  const { refetch } = useGetExperience();
  const { mutate } = useMutation({
    mutationKey: ["deleteExperience"],
    mutationFn: experienceService.DeleteExperience,
    onSuccess: () => {
      refetch();
    },
  });

  const handleDeleteExperience = (experience_id: number) => {
    mutate(experience_id);
  };

  return { handleDeleteExperience };
};

export default useDeleteExperience;
