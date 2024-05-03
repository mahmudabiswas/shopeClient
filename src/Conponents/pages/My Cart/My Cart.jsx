import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./cart";

const MyCart = () => {
  const brandData = useLoaderData([]);
  const [brands, setBrand] = useState(brandData);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-5">
        {brands?.map((brand) => (
          <Cart
            key={brand.id}
            brand={brand}
            brands={brands}
            setBrand={setBrand}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
