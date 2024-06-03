import React from "react";
import Swal from "sweetalert2";
const handleCoffeeSubmit = (e) => {
  e.preventDefault();
  const form = event.target;
  const img = form.img.value;
  const name = form.name.value;
  const brandName = form.brandName.value;
  const price = form.price.value;
  const description = form.description.value;
  const rating = form.rating.value;
  const user = { img, name, brandName, price, description, rating };
  console.log(user);
  fetch("https://brand-server-mu.vercel.app/brand", {
    method: "Post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.acknowledged) {
        Swal.success({
          title: "success",
          text: "your data is successFully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
};
const AddProduct = () => {
  return (
    <div>
      <form
        onSubmit={handleCoffeeSubmit}
        className=" mx-10 my-12 bg-[#F4F3F0] px-10 py-12"
      >
        <div className="flex justify-between  gap-2 m-auto">
          <div className="w-full gap-5">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" name="img" placeholder="img" />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="name"
                className="Name"
                placeholder="Name"
              />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" name="brandName" placeholder="BrandName" />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <input type="number" name="price" placeholder="Price" />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="description"
                placeholder="Short description"
              />
            </label>
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" name="rating" placeholder="Rating" />
            </label>
            <br />
          </div>
          {/*  */}
        </div>

        <br />
        <label className="input input-bordered bg-[#D2B48C] flex items-center gap-2 my-2">
          <input type="submit" value="Add button" />
        </label>
      </form>
    </div>
  );
};

export default AddProduct;
