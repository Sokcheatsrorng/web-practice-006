import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { TiWorld } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
function CSTADContact() {
  return (
    <>
    <h2 className="text-center font-bold text-2xl text-[#253D94]">IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.</h2>
    <div className="mt-8 bg-gray-200 p-8 md:w-[996px] mx-auto flex flex-col mb-8 ">
     <div className="contact-info">
      <p className="flex mb-3">
      <FaLocationDot className="text-[#253D94] text-lg"/> &nbsp; No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh, Cambodia
      </p>
      <p className="flex mb-3">
      <MdOutlineSmartphone className="text-[#253D94] text-lg"/> &nbsp;
        <a href="tel:+85595990910">(+855) 95 990 910</a> |{' '}
        <a href="tel:+85593990910">(+855) 93 990 910</a>
      </p>
      <p className="flex mb-3">
      <FaTelegram className="text-[#253D94] text-lg"/> &nbsp;<a href="https://telegram.org/">Telegram Channel</a>
      </p>
      <p className="flex mb-3">
      <FaFacebook className="text-[#253D94] text-lg"/>&nbsp; <a href="https://www.facebook.com/">Facebook</a>
      </p>
      <p className="flex mb-3">
      <IoMail className="text-[#253D94] text-lg"/> &nbsp;<a href="mailto:info.istad@gmail.com">info.istad@gmail.com</a>
      </p>
      <p className="flex mb-3">
      <TiWorld className="text-[#253D94] text-lg"/>&nbsp; <a href="https://istad.co/">www.istad.co</a>
      </p>
      <p className="flex mb-3">
      <FaYoutube className="text-[#253D94] text-lg"/> &nbsp;<a href="https://www.youtube.com/">YouTube</a>
      </p>
    </div>
  </div>
    </>
    
    
  
  );
}
export default CSTADContact
