import React from "react";
import { BasisCurve, NaturalCurve } from "react-svg-curve";
type Props = {};

const Curve = (props: Props) => {
  const data: any = [
    /* [25, 50],
    [50, 75],
    [75, 80],
    [100, 40],
    [125, 30],
    [150, 60],
    [175, 50], I need to swap the x and y coordinates of a left to right curve to get it going top down*/
    [50, 25],
    [75, 50],
    [80, 75],
    [40, 100],
    [30, 125],
    [60, 150],
    [50, 175],
  ];
  return (
    <div className="w-full h-screen flex">
      <div>
        <h1>Links</h1>
        <ul>
          <li>
            <a className="hover:underline" href="/chat">
              - Chat
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/completions">
              - Completions
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/vision">
              - Vision
            </a>
          </li>
        </ul>
      </div>
      {/*
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
      */}
      <div>
        <div>
          <h3>
            <code children="<BasisCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <BasisCurve data={data} />
          </svg>
        </div>
        <div>
          <h3>
            <code children={`strokeDasharray="6"`} />
          </h3>
          <svg width="200" height="500" xmlns="http://www.w3.org/2000/svg">
            <NaturalCurve
              data={data}
              pointElement={([x, y], i) => (
                <text
                  x={x}
                  y={y}
                  key={i}
                  alignmentBaseline="middle"
                  textAnchor="middle"
                  fill="red"
                  fontSize={24}
                >
                  {i}
                </text>
              )}
              showPoints={false}
              strokeWidth={10}
              strokeDasharray="6"
              stroke="blue"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Curve;
