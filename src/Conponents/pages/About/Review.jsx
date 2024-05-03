import React from "react";
import logo1 from "../../../../public/Brand/logo1.webp";
import logo2 from "../../../../public/Brand/logo2.webp";
import logo3 from "../../../../public/Brand/logo3.webp";
const Review = () => {
  return (
    <div className="bg-gray-200 p-10">
      <h1 className="text-6xl text-center">Review of our customers</h1>
      <div className="grid md:grid-cols-3 items-center gap-10 md:p-10">
        <div>
          <p className="text-2xl my-20">
            {" "}
            There's nothing would satisfy me much more than a worry-free clean
            and responsive theme for my high-traffic site
          </p>
          <div className="flex my-10 gap-4 items-center">
            <div>
              <img src={logo1} alt="" />
            </div>
            <div className="text-xl text-gray-700">
              <h3 className="text-2xl font-bold">Brandly Pink</h3>
              <p>/Ceo</p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <p className="text-2xl my-20">
            {" "}
            There's nothing would satisfy me much more than a worry-free clean
            and responsive theme for my high-traffic site
          </p>
          <div className="flex my-10  gap-4 items-center">
            <div>
              <img src={logo2} alt="" />
            </div>
            <div className="text-xl text-gray-700">
              <h3 className="text-2xl font-bold">Desely Deseim</h3>
              <p>/Founder</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <p className="text-2xl my-20">
            {" "}
            There's nothing would satisfy me much more than a worry-free clean
            and responsive theme for my high-traffic site
          </p>
          <div className="flex my-10  gap-4  items-center">
            <div>
              <img src={logo3} alt="" />
            </div>
            <div className="text-xl text-gray-700">
              <h3 className="text-2xl font-bold">Willem Breadly</h3>
              <p>/Repoter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
