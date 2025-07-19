const ProjectsHeader = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mt-5 justify-center items-center">
        <h1
          className="bg-gradient-to-l from-blue-600  to-purple-600 to-80% bg-clip-text text-transparent text-6xl font-bold"
          style={{ textShadow: "6px 10px 90px #155dfc" }}
        >
          My Projects
        </h1>

        <p className="text-xl font-semibold text-center text-gray-500 w-[55pc]">
          Discover my creative and innovative projects, spanning design to
          development, and see how I can add value to your next endeavor
        </p>
      </div>
    </>
  );
};

export default ProjectsHeader;
