
'use client';
import { FaTag } from "react-icons/fa";
import { Card } from 'flowbite-react';
import { Inter } from "next/font/google";

function CardContentComponent() {
  return (
    <Card className="w-[300px] h-[320px] rounded-lg border border-gray-300 overflow-hidden">
    <div className="relative h-[200px]">
      <img
        src="https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png"
        className="object-cover w-full h-full rounded-t-lg"
        alt="image 1"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-70 text-white">
        <span className="text-xs text-white">
          <FaTag className="inline-block mr-1 text-md" />
          Blog
        </span>
        <span className="text-xs float-right">08-Dec-2022</span>
      </div>
    </div>
  
    {/* Text Content */}
    <div className="p-4">
      <h2 className="text-lg text-gray-800 font-normal mb-2">
        តើអ្វីទៅជា Cybersecurity?
      </h2>
      
    </div>
  </Card>
  

  );
}
export default  CardContentComponent;
