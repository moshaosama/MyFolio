import { useQuery } from "@tanstack/react-query";
import useGetUser from "../../Portfolio/Hooks/useGetUser";
import { skillService } from "../../../Api/Skills/skillService";

const useGetSkill = () => {
  const { User } = useGetUser();
  const { data: Skills } = useQuery({
    queryKey: ["getSkills", [User?.id]],
    queryFn: () => skillService.GetData(User?.id),
    enabled: !!User?.id,
  });

  return { Skills };
};

export default useGetSkill;
