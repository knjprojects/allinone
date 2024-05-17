"use client";
import React, { useState } from "react";

type Props = {};

const TailwindTricks = (props: Props) => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [swich, setSwich]: any = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // Perform any additional actions based on the selected value
    console.log("Selected option:", selectedValue);
  };
  return (
    <div className="items-center">
      {/**below we are showing how to change styles of children when hovering over parent wiuth group and also changing p[eer color using peer] */}
      <div className="grid items center bg-blue-500 group h-20 w-20">
        <div className="h-3 w-5 group-hover:bg-red-400 bg-black"></div>
        <div className="h-2 w-5 bg-black"></div>
      </div>
      <div className="grid h-20 w-20 bg-green-400 peer-hover:bg-orange-500 transition-colrs duration-300 ease-in-out delay-300">
        <div className="w-4 h-3 animate-marquee"></div>
      </div>
      <label htmlFor="options">Select an option:</label>
      <select id="options" onChange={handleSelectChange}>
        {/* Map each string in the options array to an <option> element */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex w-full items-center">
        <div className="rounded-lg w-20 h-10 shadow-[0_0_10px_purple]"></div>
        <div className="rounded-lg w-20 h-10 shadow-[0_0_10px_theme('colors.purple.700')]"></div>
        <div className="rounded-lg w-20 h-10 shadow-neon"></div>
        {/*check extend in tailwindconfig, to be able to change the color of our neon shadow, we create our own custom tailwind plugin */}
      </div>
    </div>
  );
};

export default TailwindTricks;
