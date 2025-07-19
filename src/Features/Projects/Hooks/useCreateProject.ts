import { useMutation } from "@tanstack/react-query";
import useGetUser from "../../Portfolio/Hooks/useGetUser";
import useGetProjects from "./useGetProjects";
import { projectService } from "../../../Api/Projects/ProjectService";

const useCreateProject = () => {
  const { User } = useGetUser();
  const { refetch } = useGetProjects();
  const { mutate } = useMutation({
    mutationKey: ["createProject"],
    mutationFn: () => projectService.CreateData(User?.id),
    onSuccess: () => {
      refetch();
    },
  });

  const handleCreateNewProject = () => {
    mutate();
  };

  return { handleCreateNewProject };
};

export default useCreateProject;
