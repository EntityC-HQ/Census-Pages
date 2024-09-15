const Footer = () => {
  return (
    <div className=" mt-10 ">
      <p className="md:text-3xl text-xl mb-4">
        We see the <span className="text-red-500">path</span>,
      </p>
      <p className="mb-4">We build the bridge, then</p>
      <p className="md:text-2xl mb-4">
        We deconstruct it and explain to you our entire
      </p>
      <p className="md:text-3xl text-xl font-bold text-red-500">experience</p>
      <div>
        <p className="md:text-3xl text-xl mt-10 mb-6 text-center">
          <span className="md:text-4xl text-2xl font-bold">Census</span> is part
          of{" "}
          <a
            className="text-red-500 font-bold md:text-4xl text-2xl border-b-2 border-red-500 "
            href="https://entityc-pages.pages.dev/"
          >
            EntityC
          </a>
        </p>
      </div>
      <div className="flex justify-center space-x-3 mt-4">
        <div className="md:h-8 md:w-8 h-4 w-4 border-2 border-white" />
        <div className="md:h-8 md:w-8 h-4 w-4 bg-red-500" />
        <div className="md:h-8 md:w-8 h-4 w-4 border-2 border-white" />
      </div>
    </div>
  );
};

export default Footer;
