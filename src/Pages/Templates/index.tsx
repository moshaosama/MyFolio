import Hero from "../../Features/Portfolio/Components/Hero";
import EditTagsModelProvider from "../../Features/Portfolio/Context/EditTagsModelContext";
import ProjectsCards from "../../Features/Projects/Components/ProjectsCards";
import ProjectsHeader from "../../Features/Projects/Components/ProjectsHeader";
import SkillsHeader from "../../Features/Skills/Components/SkillsHeader";
import SkillsRender from "../../Features/Skills/Components/SkillsRender";
const Template = () => {
  return (
    <>
      <div className="bg-[#0f0d14]">
        <EditTagsModelProvider>
          <Hero />
          <ProjectsHeader />
          <ProjectsCards />
          <SkillsHeader />
          <SkillsRender />
        </EditTagsModelProvider>
      </div>
    </>
  );
};

export default Template;
