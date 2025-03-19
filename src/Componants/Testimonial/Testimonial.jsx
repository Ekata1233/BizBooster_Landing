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
        "https://biz-booster-landingpage-backend.vercel.app/api/testimonial/get"
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
        rating: index === 0 ? 3.5 : index === 1 ? 4.5 : testimonial.rating, // First card 3.5, second card 4.5
      }));

      setTestimonials(formattedTestimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  // Function to render stars correctly (full, half, empty)
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} style={{ color: "#00509D", fontSize: "18px" }} />); // Full Star
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} style={{ color: "#00509D", fontSize: "18px" }} />); // Half Star
      } else {
        stars.push(<FaStar key={i} style={{ color: "#ccc", fontSize: "18px" }} />); // Empty Star
      }
    }
    return stars;
  };

  return (
    <div className="testi pb-5 bg-white">
      <SEO title=" Testimonial " description="This is Testimonial Page." />
      <Container>
        <h4 className="colorBlue pt-5 pb-2 text-center">
          ----- Testimonial -----
        </h4>
        <h1 className="text-center">Our Client Say!!!</h1>

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
              <Card className="packCard1 mx-3 my-5 " style={{ border: "none" }}>
                <Card.Body>
                  <div className="testiDiv text pb-5 rounded rounded-4">
                    <Card.Text className="p-3">{testi.para}</Card.Text>
                  </div>
                  <Card.Img
                    variant="top"
                    src={testi.src}
                    className="rounded-circle img-fluid card-img"
                    style={{
                      width: "120px", // Adjust size (change 100px to your preference)
                      height: "120px", // Ensures it remains circular
                      borderRadius: "50%", // Ensures perfect circle
                      objectFit: "cover", // Prevents stretching
                      border: "2px dotted #000", // Keeps dotted border
                      padding: "15px",
                      display: "block",
                      margin: "auto", // Centers it
                    }}
                  />
                  <Card.Title className="mt-5 pt-5 text-center">
                    {testi.title}
                  </Card.Title>
                  <Card.Text className="text-center pt-0">
                    {testi.text1}
                  </Card.Text>

                  {/* ⭐⭐⭐✨⚪  or ⭐⭐⭐⭐✨ */}
                  <Card.Text className="text-center">{renderStars(testi.rating)}</Card.Text>
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
