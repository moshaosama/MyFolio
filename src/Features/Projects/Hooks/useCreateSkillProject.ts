import { useMutation } from "@tanstack/react-query";
import { projectService } from "../../../Api/Projects/ProjectService";
import useGetProjects from "./useGetProjects";
import { useForm } from "react-hook-form";

const useCreateSkillProject = () => {
  const { refetch } = useGetProjects();
  const {
    register: registerCreateSkillProject,
    handleSubmit: handleSubmitCreateSkillProject,
  } = useForm();
  const { mutate } = useMutation({
    mutationKey: ["CreateSkillProject"],
    mutationFn: projectService.CreateSkillProject,
    onSuccess: () => {
      refetch();
    },
  });

  const handleCreateSkillProject = (data: any, project_id: number) => {
    mutate({
      ...data,
      project_id: project_id,
    });
  };

  return {
    handleCreateSkillProject,
    registerCreateSkillProject,
    handleSubmitCreateSkillProject,
  };
};

export default useCreateSkillProject;
