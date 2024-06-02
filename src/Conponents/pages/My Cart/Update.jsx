import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const updateBrand = useLoaderData([]);
  const { _id, img, name, brandName, price, description, rating } = updateBrand;
  const handleBrandSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    const form = event.target;
    const img = form.img.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const user = { img, name, brandName, price, description, rating };
    console.log(user);
    fetch(
      `https://brand-server-p83z73l34-mahmudas-projects-d5350606.vercel.app/brand/${_id}`,
      {
        method: "Put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.success({
            title: "success",
            text: "you delete a one item",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleBrandSubmit}
        className=" mx-10 my-12 bg-[#F4F3F0] px-10 py-12"
      >
        <div className="flex justify-between  gap-2 m-auto">
          <div className="w-full gap-5">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="img"
                placeholder="img"
                defaultValue={img}
              />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="name"
                className="Name"
                placeholder="Name"
                defaultValue={name}
              />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="brandName"
                placeholder="BrandName"
                defaultValue={brandName}
              />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="number"
                name="price"
                placeholder="Price"
                defaultValue={price}
              />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="description"
                placeholder="Short description"
                defaultValue={description}
              />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                defaultValue={rating}
              />
            </label>
            <br />
          </div>
          {/*  */}
        </div>

        <br />
        <label className="input input-bordered bg-[#D2B48C] flex items-center gap-2 my-2">
          <input type="submit" value="Update button" />
        </label>
      </form>
    </div>
  );
};

export default Update;
