import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { projectService } from "../../../Api/Projects/ProjectService";
import useGetProjects from "./useGetProjects";

const useEditPeoject = () => {
  const [isOpenEdit, setIsOpenEdit] = useState<number | null>(null);
  const { refetch } = useGetProjects();
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useMutation({
    mutationKey: ["editProfile"],
    mutationFn: projectService.EditProject,
    onSuccess: () => {
      refetch();
      setIsOpenEdit(null);
      reset();
    },
  });

  const handleEditProject = (data: any) => {
    mutate({
      title: data.title,
      description: data.description,
      githubLink: data.githubLink,
      liveDemoLink: data.liveDemoLink,
      project_id: isOpenEdit as number,
      skills: JSON.parse(data.skills),
    });
  };
  const handleTriggerOpenEdit = (projectId: number) => {
    setIsOpenEdit(projectId);
  };

  const handleCloseOpenEdit = () => {
    setIsOpenEdit(null);
    reset();
  };

  return {
    isOpenEdit,
    handleTriggerOpenEdit,
    handleCloseOpenEdit,
    register,
    handleSubmit,
    handleEditProject,
  };
};

export default useEditPeoject;
