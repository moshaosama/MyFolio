import Hero from "../../Features/Portfolio/Components/Hero";
import EditTagsModelProvider from "../../Features/Portfolio/Context/EditTagsModelContext";
const Template = () => {
  return (
    <>
      <div className="h-[83.1vh] bg-[#0f0d14]">
        <EditTagsModelProvider>
          <Hero />
        </EditTagsModelProvider>
      </div>
    </>
  );
};

export default Template;
