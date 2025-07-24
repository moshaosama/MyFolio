import { useMutation } from "@tanstack/react-query";
import { projectService } from "../../../Api/Projects/ProjectService";
import useGetProjects from "./useGetProjects";

const useDeleteProjectSkill = () => {
  const { refetch } = useGetProjects();
  const { mutate } = useMutation({
    mutationKey: ["DeleteSkillProject"],
    mutationFn: projectService.DeleteSkillProject,
    onSuccess: () => {
      refetch();
    },
  });

  const handleDeleteSkillProject = (skillProject_id: number) => {
    mutate(skillProject_id);
  };

  return { handleDeleteSkillProject };
};

export default useDeleteProjectSkill;
