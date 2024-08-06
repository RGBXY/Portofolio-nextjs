import React from "react";
import { AnimatedTooltip } from "./ui/Tools";
import { people } from "@/data";
import { chakra } from "./ui/fonts";

const Skills = () => {
  return (
    <div className="py-10 flex items-center flex-col">
      <div className="text-start w-[90%] max-w-2xl lg:w-fit">
        <h1 className={`${chakra.className} mb-10 pb-3 text-3xl border-b-2 border-white`}>Skils and Tools</h1>
      </div>
      <div className="flex px-10 flex-row items-center justify-center gap-9 flex-wrap mb-10 w-full md:w-[70%] lg:w-[50%]">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
};

export default Skills;
