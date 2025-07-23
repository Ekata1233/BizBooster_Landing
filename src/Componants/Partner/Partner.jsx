import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import SEO from "../SEO";

function Partner() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch("https://landingpagebackend-nine.vercel.app/api/partners/get")
            .then(res => res.json())
            .then(data => {
                if (data.data && Array.isArray(data.data)) {
                    const validPartners = data.data.filter(p => p.fileType === "image");
                    setPartners(validPartners);
                } else {
                    console.error("Unexpected partner data structure:", data);
                }
            })
            .catch(error => console.error("Error fetching partner data:", error));
    }, []);

    return (
        <div className="bg-white text-dark w-100 py-4">
            <SEO title="Partner" description="This is the Partner Page." />
            <h3 className="fw-bold text-center" style={{ color: "#2164F4" }}>Partners</h3>
            <h2 className="fw-bold text-center">Our Esteemed Business Partners</h2>
            <div className="w-full max-w-7xl mx-auto py-4">
                <Container>
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={30}
                        slidesPerView={5}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        freeMode={true}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            425: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1200: { slidesPerView: 4 }
                        }}
                        className="py-3"
                    >
                        {partners.map((partner) => (
                            <SwiperSlide key={partner._id}>
                                <div className="card text-center py-lg-4 mx-2" style={{ border: "none" }}>
                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "100%",
                                            height: "120px",
                                            padding: "10px"
                                        }}
                                    >
                                        <img
                                            src={partner.fileUrl}
                                            alt={partner.name}
                                            className="rounded img-fluid"
                                            style={{
                                                maxHeight: "100px",
                                                maxWidth: "100%",
                                                objectFit: "contain"
                                            }}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </div>
        </div>
    );
}

export default Partner;
