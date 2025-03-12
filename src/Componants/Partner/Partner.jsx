import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

function Partner() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch images from the API
        fetch("https://biz-booster-landingpage-backend.vercel.app/api/images/get")
            .then(response => response.json())
            .then(data => {
                console.log("API Response:", data); // Log the API response for debugging

                // Check if the response is an array and has at least one object
                if (Array.isArray(data) && data.length > 0) {
                    // Extract the images array from the first object
                    const images = data[0].images;

                    // Map the images to the required format
                    const partnerImages = images.map((image, index) => ({
                        id: index + 1,
                        title: `Item ${index + 1}`,
                        image: image
                    }));
                    setItems(partnerImages);
                } else {
                    console.error("Unexpected API response structure:", data);
                }
            })
            .catch(error => console.error("Error fetching images:", error));
    }, []);

    return (
        <div className='bg-white text-dark w-100 py-4'>
            <h3 className='fw-bold blue text-center'>Partners</h3>
            <h2 className='fw-bold text-center'>Our Esteemed Business Partners</h2>
            <div className="w-full max-w-7xl mx-auto py-8">
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
                            425: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 5 },
                        }}
                        className="py-3"
                    >
                        {items.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="card text-center py-lg-4 mx-2" style={{ border: "none" }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded d-block img-fluid"
                                        style={{ height: "100px" }}
                                    />
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