import React from "react";
import apple from "../../../../public/Brand/apple.webp";
import Review from "./Review";
const About = () => {
  return (
    <div>
      <div className="w-full flex justify-center m-auto">
        <img src={apple} alt="" />
      </div>
      <div className="grid md:grid-cols-2 gap-3 items-center my-20 md:p-10">
        <div className="text-2xl">
          <p>OADDRESS</p>
          <br />

          <p>Shop 009A, Level 4, Block A,Demo Park, Ottawa</p>

          <br />
          <p>Phone</p>
          <br />

          <p>Mobile: +1-613-555-0182</p>
          <br />

          <p>EMAIL</p>
          <br />

          <p>contact@apleestore.com</p>
        </div>
        <div>
          <p className="text-2xl ">
            {" "}
            aplee always follow 3 things “authentic apple products”, “fast
            delivery” & “best service” in these cases, we never consider and
            never failed which has driven to the fastest growing e-commerce and
            top trusted reseller with customer satisfaction in terms of product
            authenticity and best after sell service.
          </p>
          <br />
          <br />

          <button className="btn bg-black text-white text-2xl ">
            <span>+</span>
            ONLINE STORE
          </button>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default About;
