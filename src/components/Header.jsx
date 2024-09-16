import LogoCensus from "./LogoCensus";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col p-2 md:p-4 bg-black">
        <div className="flex flex-row mr-20 ml-0">
          <a
            href="/"
            rel="noopener noreferrer"
            className="text-white flex w-1/5 -ml-3 md:-ml-36 "
          >
            <LogoCensus />
          </a>
        </div>
        <div>
          <p className="text-xs md:text-sm text-white text-right mt-2.5 md:-mt-10 font-no-exit">
            where [c] stands for more than just crypto
          </p>
        </div>
      </header>
      <div className="text-right text-white md:text-2xl text-sm font-no-exit ">
        <a href="#Blog">
          <span className="md:mr-20 mr-10 hover:text-red-500">Blog</span>
        </a>
        <a href="#Twitter/X">
          <span className="md:mr-20 mr-10 hover:text-red-500">Twitter/X</span>
        </a>
        <a href="#Discord-Research Hub">
          <span className="md:mr-20 mr-10 hover:text-red-500">
            Discord-Research-Hub
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
