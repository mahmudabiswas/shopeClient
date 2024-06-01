import React from "react";

// img
import img1 from "../../../../public/Brand/mack.webp";
import img2 from "../../../../public/Brand/mobile1.webp";
import img3 from "../../../../public/Brand/3watch.webp";

const HomeRight = () => {
  return (
    <>
      <div className="carousel w-full h-[500px]">
        <div id="item1" className="carousel-item w-full ">
          <img
            src="https://i.ibb.co/ZBZwSzQ/m-rennim-0p-KGm-ISCz-RE-unsplash.jpg"
            className="w-full h-[500px]"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/BztLStQ/austin-distel-waw-Ef-Ydpkag-unsplash.jpg"
            className="h-[500px] w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/1G9Htq8/carles-rabada-Fouye-A9-HH5-U-unsplash.jpg"
            className="h-[500px] w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/3114JV3/kina-A-g-H-Be-Lu-GU-unsplash.jpg"
            className="h-[700px] w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default HomeRight;
