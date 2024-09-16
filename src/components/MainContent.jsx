const MainContent = () => {
  return (
    <div className="text-white mt-32 mb-10 px-4 relative">
      <div className="text-2xl md:text-6xl leading-none">
        <div>Etiam rhoncus</div>
        <div>
          dictum <span className="text-red-500">felis</span> tempus,
        </div>
        <div>tellus eget condimentum.</div>
      </div>

      <div className="flex flex-row mt-8 text-xl md:text-2xl">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue.{" "}
          <span className="border-b-4 border-red-500 inline-block w-16 sm:w-24"></span>
        </p>
      </div>
    </div>
  );
};

export default MainContent;
