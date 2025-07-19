import { useMutation } from "@tanstack/react-query";
import { projectService } from "../../../Api/Projects/ProjectService";
import useGetProjects from "./useGetProjects";

const useDeleteProject = () => {
  const { refetch } = useGetProjects();
  const { mutate } = useMutation({
    mutationKey: ["deleteProject"],
    mutationFn: projectService.DeleteProject,
    onSuccess: () => {
      refetch();
    },
  });

  const handleDeleteProject = (project_id: number) => {
    mutate(project_id);
  };

  return { handleDeleteProject };
};

export default useDeleteProject;
