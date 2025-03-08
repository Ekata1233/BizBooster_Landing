import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, Controller, FreeMode } from "swiper/modules";
import { Container } from "react-bootstrap";
import comp1 from '../../assets/company-logo1.jpg'
import comp2 from '../../assets/company-logo2.jpg'
import comp3 from '../../assets/company-logo3.png'
import comp4 from '../../assets/company-logo4.png'
import comp5 from '../../assets/company-logo6.jpg'
import AboutOurServices from "../AboutOurServices/AboutOurServices";
// import comp6 from '../../assets/company-logo6.jpg'

function Partner() {
    const items = [
        { id: 1, title: "Item 1", image: comp1},
        { id: 2, title: "Item 2", image: comp2 },
        { id: 3, title: "Item 3", image: comp3 },
        { id: 4, title: "Item 4", image: comp4 },
        { id: 5, title: "Item 5", image: comp5 },
        { id: 6, title: "Item 6", image: comp1},
        { id: 7, title: "Item 7", image: comp2 },
        { id: 8, title: "Item 8", image: comp3 },
        { id: 9, title: "Item 9", image: comp4 },
        { id: 10, title: "Item 10", image: comp5 },
    ];

    return (
        <div className='bg-white text-dark  w-100 py-4 '>
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
                            <div className="card text-center py-lg-4  mx-2" style={{ border: "none" }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="rounded  d-block img-fluid"
                                    // style={{ objectFit: "cover" }}
                                    style={{ height:"100px"}}
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
