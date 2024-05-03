import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateDetails = () => {
  const detailsData = useLoaderData();
  const { id } = useParams();
  // const idIn = parseInt(id);
  const update = detailsData.find((item) => item._id === id);

  console.log(typeof id, update);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl   p-10 my-5">
        <div>
          <h1 className="text-center text-xl font-bold"> {update.name} </h1>
          <figure>
            <img src={update.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase"> {update.brandName} </h2>
            <p className="text-xl text-gray-600">{update.description}</p>
            <h3 className="text-red-500 font-extrabold"> {update.price}</h3>
            <div className="card-actions ">
              <p className="text-yellow-400"> {update.rating} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDetails;
