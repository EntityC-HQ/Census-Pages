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
          <p className="text-xs md:text-sm text-white text-right mt-2.5 md:-mt-10 ">
            where [c] stands for more than just crypto
          </p>
        </div>
      </header>
      <div className="text-right text-white md:text-2xl text-sm  ">
        <a href={import.meta.env.VITE_APP_BLOG_URL}>
          <span className="md:mr-20 mr-10 hover:text-red-500">Blog</span>
        </a>
        <a href={import.meta.env.VITE_APP_X_URL}>
          <span className="md:mr-20 mr-10 hover:text-red-500">Twitter/X</span>
        </a>
        <a href={import.meta.env.VITE_APP_DISCORD_HUB_URL}>
          <span className="md:mr-20 mr-10 hover:text-red-500">
            Discord-Research-Hub
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
