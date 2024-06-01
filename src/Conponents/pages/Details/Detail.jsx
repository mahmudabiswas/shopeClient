// img

const Detail = ({ item }) => {
  return (
    <div>
      {/* carosul */}
      <div>
        <div className="carousel w-full h-[500px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={item.img} className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={item.img2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={item.img3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={item.img2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-5">
        {/* div1 */}
        <div>
          <div key={item.id} className="card m-auto w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={item.img} alt="brand" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> {item.name} </h2>
              <p> {item.brandName} </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* div2 */}
        <div>
          <div key={item.id} className="card m-auto w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={item.img} alt="brand" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> {item.name} </h2>
              <p> {item.brandName} </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* div3 */}
        <div>
          <div key={item.id} className="card m-auto w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={item.img} alt="brand" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> {item.name} </h2>
              <p> {item.brandName} </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Slider = () => {
//   return (
//     <>
//       <div>
//         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//           <SwiperSlide className="swiper-slide  " data-swiper-autoplay="1000">
//             <img src={img2} alt="" />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   );
// };
export default Detail;
