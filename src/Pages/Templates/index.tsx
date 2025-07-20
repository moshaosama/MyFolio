import ContactHeader from "../../Features/Contact/Components/ContactHeader";
import ContactRenders from "../../Features/Contact/Components/ContactRenders";
import ExperienceHeader from "../../Features/Experience/Components/ExperienceHeader";
import Hero from "../../Features/Portfolio/Components/Hero";
import EditTagsModelProvider from "../../Features/Portfolio/Context/EditTagsModelContext";
import ProjectsCards from "../../Features/Projects/Components/ProjectsCards";
import ProjectsHeader from "../../Features/Projects/Components/ProjectsHeader";
import SkillsHeader from "../../Features/Skills/Components/SkillsHeader";
import SkillsRender from "../../Features/Skills/Components/SkillsRender";
import OpenSkillProvider from "../../Features/Skills/Context/OpenEditSkillContext";
import useNavbarLinks from "../../Hooks/useNavbarLinks";
const Template = () => {
  const { isFound } = useNavbarLinks();

  return (
    <>
      <div className="bg-[#0f0d14]">
        <EditTagsModelProvider>
          <OpenSkillProvider>
            {isFound.About && <Hero />}
            {isFound.Projects && (
              <>
                <ProjectsHeader />
                <ProjectsCards />
              </>
            )}
            {isFound.Skills && (
              <>
                <SkillsHeader />
                <SkillsRender />
              </>
            )}
            {isFound.Experience && <ExperienceHeader />}
            {isFound.Contact && (
              <>
                <ContactHeader />
                <ContactRenders />
              </>
            )}
          </OpenSkillProvider>
        </EditTagsModelProvider>
      </div>
    </>
  );
};

export default Template;
