import React from "react";
import { GoGoal } from "react-icons/go";

function CSTADMission() {
  return (
    <div className="mt-8 bg-gray-200 p-8 md:w-[996px] mx-auto flex flex-col  mb-8">
    <h1 className="text-xl font-semibold mb-4 flex text-left text-[#253D94]">
      <GoGoal className="text-2xl"/> &nbsp;MISION
    </h1>
    <ul className="text-sm leading-relaxed list-disc">
      <li>
        Provide the latest methodology with high quality training and mentoring
      </li>
      <li>Build up the capacity and career of IT experts Cambodia</li>
      <li>Consult and connect CSTAD trainees to top IT careers</li>
    </ul>
  </div>
  
  );
}
export default CSTADMission
