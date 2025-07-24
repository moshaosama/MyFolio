import axios from "axios";
import useGetProjects from "./useGetProjects";
import { useEffect, useState } from "react";

const useGetSkillProject = () => {
  const { Projects } = useGetProjects();
  const [SkillsProject, setSkillProject] = useState<any[]>([]);

  useEffect(() => {
    if (!Projects?.projects?.length) return;

    const fetchSkills = async () => {
      try {
        const responses = await Promise.all(
          Projects.projects.map((el: any) =>
            axios.get(
              `https://myfolioserver-production.up.railway.app/get-skill-project/skills/${el.id}`
            )
          )
        );

        const allSkills = responses.map((res) => res.data);
        setSkillProject(allSkills);
      } catch (error) {
        console.error("Error fetching skill projects", error);
      }
    };

    fetchSkills();
  }, [Projects]);

  console.log("SkillsProject:", SkillsProject);

  return { SkillsProject };
};

export default useGetSkillProject;
