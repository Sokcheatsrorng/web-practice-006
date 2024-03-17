import React from 'react';
import IstadLogoAboutUs from '../IstadLogo/IstadLogoAboutUs'
import { FaTerminal } from "react-icons/fa";

function CSTADInfo() {
  return (
    <div className="mt-28 bg-gray-200 p-8 md:w-[996px] mx-auto flex flex-col  mb-8">
    <h1 className="text-xl font-semibold mb-4 flex text-left text-[#253D94]">
    <FaTerminal className='text-2xl'/> &nbsp;WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?</h1>
    <p className="text-sm leading-relaxed">
      CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company. CSTAD will continue to provide high-quality training with the latest methodology, and roadmap as well as the best choice for those who want to be an IT expert in Cambodia.
    </p>
    <div className="mt-4 items-center justify-center flex ">
      <IstadLogoAboutUs />
    </div>
  </div>
  
  );
}
export default CSTADInfo;
