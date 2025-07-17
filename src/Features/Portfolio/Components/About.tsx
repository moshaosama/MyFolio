import useGetAnimationText from "../../../Hooks/useGetAnimationText";

const About = () => {
  const { startText } = useGetAnimationText([
    "Front-end Developer",
    "Bac-end Developer",
  ]);
  return (
    <>
      <div className="text-white p-2 font-bold text-lg bg-black w-60 rounded-xl ">
        <h1>✨ {startText}</h1>
      </div>
    </>
  );
};

export default About;
