import React from "react";
import Map from "./Map";

const Contact = () => {
  return (
    <div className="my-20">
      <p className="text-center text-xl text-gray-400">
        You can ask us questions !
      </p>
      <h2 className="text-5xl font-bold text-center my-10">
        Ask all your questions
      </h2>
      <div className="grid md:grid-cols-3 p-20">
        {/* 1 */}
        <div className="">
          <h1 className="text-xl font-bold text-gray-500">ADDRESS</h1>
          <br />
          <div className="text-gray-500">
            <p>Shop No 009A, Level 4, Block A,</p>
            <p>Demo Park, Ottawa</p>
          </div>
        </div>
        {/* 2 */}
        <div className="">
          <h1 className="text-xl font-bold text-gray-500">CONTACT</h1>
          <br />
          <div className="text-gray-500">
            <p>Mobile: (+88) – 1990 – 6886</p>
            <p>Mail: contact@apleestore.com</p>
          </div>
        </div>
        {/* 3 */}
        <div className="">
          <h1 className="text-xl font-bold text-gray-500">HOUR OF OPERATION</h1>
          <br />
          <div className="text-gray-500">
            <p>Monday – Friday : 09:00 – 20:00</p>
            <p>Sunday & Saturday: 10:30 – 22:00</p>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
