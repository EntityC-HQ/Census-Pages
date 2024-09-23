import { useState } from "react";
import LogoCensusAnimation from "./LogoCensusAnimation";

const LogoCensus = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 115.80 51.09"
            className="transition-opacity duration-500 ease-in-out w-full h-auto"
          >
            <defs>
              <style>{`
            .cls-1 { fill: #fff; }
            .cls-2 { fill: red; }
            
          `}</style>
            </defs>
            <g>
              <rect className="cls-1" width="49.69" height="10.55" />
              <rect className="cls-1" y="20.39" width="49.69" height="10.55" />
              <rect className="cls-2" y="40.55" width="49.69" height="10.55" />
              <rect className="cls-1" x="60" width="19.45" height="10.55" />
              <rect
                className="cls-1"
                x="60"
                y="40.55"
                width="19.45"
                height="10.55"
              />
              <rect className="cls-1" x="90" width="19.69" height="10.55" />
              <rect
                className="cls-1"
                x="90"
                y="40.55"
                width="19.69"
                height="10.55"
              />
              <rect
                className="cls-1"
                x="60"
                y="20.39"
                width="19.45"
                height="10.31"
              />
            </g>
          </svg>
        </div>
      </div>
      {hovered && (
        <div className="2xl:mt-16 xl:mt-11 lg:mt-10 md:mt-7 mt-2">
          <div className="mt-2">
            <LogoCensusAnimation />
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoCensus;
