import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaArrowLeft, FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Testimonial/Testimonial.css";
import SEO from "../SEO";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(
        "https://landingpagebackend-nine.vercel.app/api/testimonial/get"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const formattedTestimonials = data.map((testimonial, index) => ({
        para: testimonial.description,
        src: testimonial.image,
        title: testimonial.name,
        text1: testimonial.location,
        rating: index === 0 ? 3.5 : index === 1 ? 4.5 : testimonial.rating,
      }));

      setTestimonials(formattedTestimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} style={{ color: "#00509D", fontSize: "18px" }} />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} style={{ color: "#00509D", fontSize: "18px" }} />);
      } else {
        stars.push(<FaStar key={i} style={{ color: "#ccc", fontSize: "18px" }} />);
      }
    }
    return stars;
  };

  return (
    <div className="testi pb-5 bg-white">
      <SEO title="Testimonial" description="This is Testimonial Page." />
      <Container>
        <h4 className="colorBlue pt-5 pb-2 text-center">----- Testimonial -----</h4>
        <h1 className="text-center mb-4">What Our Clients Say</h1>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <Card className="packCard1 mx-auto my-4">
                <Card.Body className="d-flex flex-column align-items-center text-center">

                  {/* 1. User Image */}
                  <Card.Img variant="top" src={testi.src} className="card-img" />

                  {/* 2. Name */}
                  <Card.Title className="mt-3">{testi.title}</Card.Title>

                  {/* 3. Location */}
                  <Card.Text className="text-muted">{testi.text1}</Card.Text>

                  {/* 4. Star Rating */}
                  <div className="mb-2" style={{color:'#2164F4'}}>{renderStars(testi.rating)}</div>

                  {/* 5. Testimonial Text */}
                  <div className="testiDiv mt-2 rounded-4 w-100">
                    <Card.Text className="p-3">{testi.para}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="d-flex justify-content-center mt-3">
          <Button ref={prevRef} variant="outline-primary" className="mx-2">
            <FaArrowLeft />
          </Button>
          <Button ref={nextRef} variant="outline-primary" className="mx-2">
            <FaArrowRight />
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
