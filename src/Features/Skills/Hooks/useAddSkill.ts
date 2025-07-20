import { useForm } from "react-hook-form";
import useGetSkill from "./useGetSkill";
import { useMutation } from "@tanstack/react-query";
import { skillService } from "../../../Api/Skills/skillService";
import useGetUser from "../../Portfolio/Hooks/useGetUser";
import { useOpenSkillContext } from "../Context/OpenEditSkillContext";

const useAddSkill = () => {
  const { register, handleSubmit } = useForm();
  const { User } = useGetUser();
  const { refetch } = useGetSkill();
  const { handleTriggerOpenAddModel } = useOpenSkillContext();

  const { mutate } = useMutation({
    mutationKey: ["createSkill"],
    mutationFn: skillService.CreateData,
    onSuccess: () => {
      refetch();
      handleTriggerOpenAddModel();
    },
  });

  const handleAddSkill = (data: any) => {
    mutate({
      skill_name: data.skill_name,
      userId: User?.id,
    });
  };

  return { register, handleAddSkill, handleSubmit };
};

export default useAddSkill;
