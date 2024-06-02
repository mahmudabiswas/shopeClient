import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";

const Details = () => {
  const [brand, setBrand] = useState([]);
  const { brandName } = useParams();
  console.log(brandName);

  useEffect(() => {
    fetch(
      `https://brand-server-p83z73l34-mahmudas-projects-d5350606.vercel.app/brand`
    )
      .then((res) => res.json())
      .then((data) => {
        const filter = data.filter((item) => item.brandName === brandName);
        // const img1 = data.filter((item) => item.img1 === img1);
        setBrand(filter);
        // console.log(filter);
      });
  }, []);
  return (
    <div>
      <h1></h1>
      {brand.map((item) => (
        <>
          <Detail key={item.id} item={item} />
        </>
      ))}
    </div>
  );
};

export default Details;
