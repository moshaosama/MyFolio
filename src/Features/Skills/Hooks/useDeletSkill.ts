import { useMutation } from "@tanstack/react-query";
import useGetSkill from "./useGetSkill";
import { skillService } from "../../../Api/Skills/skillService";

const useDeleteSkill = () => {
  const { refetch } = useGetSkill();

  const { mutate } = useMutation({
    mutationKey: ["deleteSkill"],
    mutationFn: skillService.DeleteSkill,
    onSuccess: () => {
      refetch();
    },
  });

  const handleDeleteSkill = (skill_id: number) => {
    mutate(skill_id);
  };

  return { handleDeleteSkill };
};

export default useDeleteSkill;
