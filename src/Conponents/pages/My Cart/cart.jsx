import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ brand, brands, setBrand }) => {
  const { _id, img, name, brandName, price, description, rating } = brand;

  const handleDeleteItem = (_id) => {
    console.log(_id, "brand item deleted");

    fetch(
      `https://brand-server-p83z73l34-mahmudas-projects-d5350606.vercel.app/brand/${_id}`,
      {
        method: "delete",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        });
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
        const remainder = brands.filter((b) => b._id !== _id);
        setBrand(remainder);
      });
  };

  return (
    <div className="flex  ">
      <div className="card w-96  shadow-xl bg-red-400   p-10 my-5">
        <div>
          <h1 className="text-center text-2xl  mb-2 font-bold"> {name} </h1>
          <figure>
            <Link to={`/details/${brandName}`}>
              <img src={img} className="h-[300px]" alt="Shoes" />
            </Link>
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase"> {brandName} </h2>
            <p className="text-xl text-white">{description.slice(0, 50)}</p>
            <button className="btn btn-primary">{price}</button>
            <div className="card-actions ">
              <div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-5 my-14">
        <Link to={`/updateDetail/${_id}`}>
          <button className="btn bg-blue-600 text-white">Details</button>
        </Link>
        <br />
        <br />
        <Link to={`/update/${_id}`}>
          <button className="btn bg-yellow-400">Update</button>
        </Link>
        <br />
        <br />
        <button
          className="btn bg-black text-white"
          onClick={() => handleDeleteItem(_id)}
        >
          Delete
        </button>
        <br />
      </div>
    </div>
  );
};

export default Cart;
