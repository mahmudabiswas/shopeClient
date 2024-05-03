import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ brand, brands, setBrand }) => {
  const { _id, img, name, brandName, price, description, rating } = brand;

  const handleDeleteItem = (_id) => {
    console.log(_id, "brand item deleted");
    fetch(`http://localhost:5000/brand/${_id}`, {
      method: "delete",
    })
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
      <div className="card w-96 bg-base-100 shadow-xl   p-10 my-5">
        <div>
          <h1 className="text-center text-xl font-bold"> {name} </h1>
          <figure>
            <Link to={`/details/${brandName}`}>
              <img src={img} alt="Shoes" />
            </Link>
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase"> {brandName} </h2>
            <p className="text-xl text-gray-600">{description}</p>
            <h3 className="text-red-500 font-extrabold"> {price}</h3>
            <div className="card-actions ">
              <p className="text-yellow-400"> {rating} </p>
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
