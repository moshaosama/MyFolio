const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5 justify-center text-white">
        <h1 className="text-6xl font-bold max-sm:text-4xl max-sm:text-center">
          Create Your Perfect{" "}
          <span className="bg-gradient-to-l from-purple-600 to-blue-600 to-60% bg-clip-text text-transparent">
            Portfolio
          </span>
        </h1>

        <p className="text-xl text-center w-1/2 max-sm:w-[23pc] text-[#d1d5dc]">
          Build a stunning portfolio in minutes with our customizable templates.
          Export as a complete React project and deploy instantly.
        </p>

        <div className="flex max-sm:flex-col items-center gap-6">
          <button className="cursor-pointer bg-gradient-to-l from-purple-600 hover:from-purple-800 to-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-300 p-4 w-40 rounded-xl font-semibold text-xl">
            Get Started
          </button>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamedOSFekry@gmail.com&su=Bug Report&body=Hi, I found a bug in..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer bg-gray-600 hover:bg-gray-700 transition-all duration-300 hover:scale-105 p-4 border-1 border-gray-300 rounded-xl font-semibold text-xl">
              🐛 Report Issue
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
