import cn from "../../../libs/cn";
import Container from "../../../Styles";
import useGetSkill from "../Hooks/useGetSkill";

const SkillsRender = () => {
  const { Skills } = useGetSkill();
  console.log(Skills?.skills);

  return (
    <>
      <div className={cn(Container)}>
        <div className="mx-28 max-sm:mx-0 py-10 w-[67pc] max-sm:w-full grid grid-cols-6 max-sm:grid-cols-2 gap-10">
          {Skills?.skills?.map(
            (skill: { skills: string; image: string; id: number }) => (
              <div
                key={skill.id}
                className="w-24 rounded-xl hover:shadow-xl transition-all duration-500 hover:shadow-white h-24 hover:bg-slate-700 flex justify-center items-center group"
              >
                <h1 className="text-white font-bold text-xl group-hover:scale-110 transition-all duration-500">
                  {skill.skills}
                </h1>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SkillsRender;
