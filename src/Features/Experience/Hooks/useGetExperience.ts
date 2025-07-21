import { useQuery } from "@tanstack/react-query";
import useGetUser from "../../Portfolio/Hooks/useGetUser";
import { experienceService } from "../../../Api/Experience/ExperienceService";

const useGetExperience = () => {
  const { User } = useGetUser();

  const { data: Experience, refetch } = useQuery({
    queryKey: ["getExperience", [User?.id]],
    queryFn: () => experienceService.GetData(User?.id),
    enabled: !!User?.id,
  });

  return { Experience, refetch };
};

export default useGetExperience;
