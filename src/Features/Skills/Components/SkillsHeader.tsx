import SectionHeader from "../../../Components/SectionHeader";

const SkillsHeader = () => {
  return (
    <>
      <div className="py-14">
        <SectionHeader
          isBtn={true}
          Description="My technical toolkit features these proficiencies. Feel free to customize this section!"
          Title="My Skills"
          id="skills"
        />
      </div>
    </>
  );
};

export default SkillsHeader;
