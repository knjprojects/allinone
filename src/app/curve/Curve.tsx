import React from "react";

type Props = {};

const Curve = (props: Props) => {
  return (
    <div className="w-full h-screen flex">
      <div className="relative flex">
        <svg className="absolute top-0 left-0" width="200" height="400">
          <path
            d="M100,50 Q20,150 100,250 T100,450"
            fill="none"
            stroke="black"
            stroke-width="2"
          />
          <circle cx="100" cy="50" r="5" fill="red" />
          <circle cx="20" cy="150" r="5" fill="red" />
          <circle cx="100" cy="250" r="5" fill="red" />
          <circle cx="100" cy="450" r="5" fill="red" />
        </svg>
        <div className="absolute top-5 left-95">
          <div>Content 1</div>
        </div>
        <div className="absolute top-145 left-15">
          <div>Content 2</div>
        </div>
        <div className="absolute top-245 left-95">
          <div>Content 3</div>
        </div>
        <div className="absolute top-445 left-95">
          <div>Content 4</div>
        </div>
      </div>
    </div>
  );
};

export default Curve;
