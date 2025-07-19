import Hero from "../../Features/Portfolio/Components/Hero";
import EditTagsModelProvider from "../../Features/Portfolio/Context/EditTagsModelContext";
import ProjectsCards from "../../Features/Projects/Components/ProjectsCards";
import ProjectsHeader from "../../Features/Projects/Components/ProjectsHeader";
const Template = () => {
  return (
    <>
      <div className="bg-[#0f0d14]">
        <EditTagsModelProvider>
          <Hero />
          <ProjectsHeader />
          <ProjectsCards />
        </EditTagsModelProvider>
      </div>
    </>
  );
};

export default Template;
