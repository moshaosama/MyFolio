import { useQuery } from "@tanstack/react-query";
import useGetUser from "../../Portfolio/Hooks/useGetUser";
import { projectService } from "../../../Api/Projects/ProjectService";

const useGetProjects = () => {
  const { User } = useGetUser();
  const { data: Projects, refetch } = useQuery({
    queryKey: ["getProject", User?.id],
    queryFn: () => projectService.GetData(User?.id),
    enabled: !!User?.id,
  });

  return { Projects, refetch };
};

export default useGetProjects;
