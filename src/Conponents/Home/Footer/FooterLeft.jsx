import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { LiaSmsSolid } from "react-icons/lia";
const FooterLeft = () => {
  return (
    <div>
      <h1 className="text-6xl font-extrabold">astor</h1>
      <div className="flex items-center my-4 gap-2 ">
        <IoIosHome className="text-2xl" />
        <p className="text-gray-400 mr-2">
          Shop 009A, Level 4, Block A, Demo Park, Ottawa
        </p>
      </div>
      <div className="flex items-center my-4 gap-2 ">
        <FaPhoneFlip className="text-2xl" />
        <p className="text-gray-400 mr-2">+1-613-555-0182</p>
      </div>
      <div className="flex items-center my-4 gap-2 ">
        <LiaSmsSolid className="text-2xl" />
        <p className="text-gray-400 mr-2">contact@aplee.com</p>
      </div>
    </div>
  );
};

export default FooterLeft;
