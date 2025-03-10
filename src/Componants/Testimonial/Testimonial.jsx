import React from "react";
import avatarIImg from "../../assets/it_services_icon.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Testimonial/Testimonial.css";

export default function Testimonial() {
  return (
    <section>
      <div className="main">
        <div className="head-p">
          <span style={{ paddingRight: "5px" }}>GET AN </span>
          <span style={{ color: "#1D8BA0" }}> OPINION</span>
        </div>
        <div className="head">TESTIMONIALS</div>
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          effect="coverflow"
          coverflowEffect={{
            rotate: 10,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
          }}
        >
          {[avatarIImg, avatarIImg, avatarIImg, avatarIImg, avatarIImg].map((avatar, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div style={{ padding: "0 20px" }}>
                <div className="testimonials-profile-circle">
                  <img
                    src={avatar}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                    loading="lazy"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
