import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ModuleDescriptions/ModuleDescription.css';
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../SEO';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ModuleDescriptions() {
    const { id } = useParams();
    const [serviceData, setServiceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://landingpagebackend-nine.vercel.app/api/servicepage/get/${id}`);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                if (data.data) setServiceData(data.data);
                else throw new Error(`Service with id ${id} not found.`);
            } catch (error) {
                console.error("Error fetching service data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const res = await axios.get('https://landingpagebackend-nine.vercel.app/api/banner/page/Services');
                if (res.data.length > 0) {
                    setBanner(res.data[0]);
                }
            } catch (err) {
                console.error("Failed to load banner for description page:", err);
            }
        };
        fetchBanner();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div><p>Error: {error}</p><button onClick={() => window.location.reload()}>Retry</button></div>;
    if (!serviceData) return <div>No data found for the selected service.</div>;

    const categories = serviceData?.categoryname || [];

    return (
        <div>
            <SEO title="Module Description" description="This is the Module Description Page." />

            {banner && (
                <div className="position-relative module-banner">
                    <img
                        src={banner.imageUrl}
                        className="w-100"
                        alt="Module Banner"
                        style={{ height: "400px", objectFit: 'cover' }}
                    />
                </div>
            )}

            <div className="desc-container">
                <div className="desc-background"></div>

                <div className='bg-white py-5'>
                    <Container>
                        <div>
                            <h1 className='fw-bold blue'>{serviceData?.titleDescArray?.[0]?.title || "Default Title"}</h1>
                            <p className='text-secondary text py-3'>{serviceData?.titleDescArray?.[0]?.description || "No description available."}</p>
                        </div>
                    </Container>
                </div>

                <div className="desc-overlay sparkle-overlay">

                    <div>
                        <h1 className='text-white fw-bold text-center py-5 display-5' data-aos="fade-up">
                        Types of Categories
                        </h1>
                        <Container>
                            <Row>
                                {categories.length > 0 ? (
                                    categories.map((category, index) => {
                                        let imageSrc = "https://via.placeholder.com/250x180?text=No+Image";
                                        if (Array.isArray(category.image) && category.image.length > 0) {
                                            const firstImage = category.image[0];
                                            imageSrc = firstImage.startsWith("http")
                                                ? firstImage
                                                : `https://landingpagebackend-nine.vercel.app${firstImage}`;
                                        } else if (serviceData.serviceImage) {
                                            imageSrc = serviceData.serviceImage;
                                        }

                                        return (
                                            <Col key={`${category._id}-${index}`} xs={12} sm={12} md={6} lg={4} className="my-4 d-flex" data-aos="zoom-in">
                                                <div className="category-card w-100">
                                                    <div className="text-center">
                                                        <img src={imageSrc} alt={category.title} className="img-fluid" />
                                                        <h3 className="fw-bold">{category.title}</h3>
                                                        <p className="p">{category.description}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        );
                                    })
                                ) : (
                                    <p className="text-center text-white">No categories available.</p>
                                )}
                            </Row>

                            {serviceData?.titleDescArray?.slice(1).map((item, idx) => {
                                const isEven = idx % 2 === 0;
                                return (
                                    <div
                                        key={idx}
                                        className="full-width-bg py-5"
                                        style={{
                                            backgroundColor: isEven ? "rgba(0, 81, 157, 0.62)" : "#ffffff"
                                        }}
                                        data-aos={isEven ? "fade-left" : "fade-right"}
                                    >
                                        <Container className='py-5'>
                                            <h1 className={`${isEven ? "text-white" : "blue"} fw-bold text-${isEven ? "end" : "start"} mb-5 display-6 double-underline`}>
                                                {item.title || "Default Section Title"}
                                            </h1>
                                            <p className={`text${isEven ? "-white" : "-secondary"} text`}>
                                                {item.description || "No description available."}
                                            </p>
                                        </Container>
                                    </div>
                                );
                            })}
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModuleDescriptions;
