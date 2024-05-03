// img

const Detail = ({ item }) => {
  return (
    <div>
      <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item.img} alt="Shoes" />
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
