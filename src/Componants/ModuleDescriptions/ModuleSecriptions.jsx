import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ModuleDescriptions/ModuleDescription.css';
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../SEO';
import axios from 'axios';

function ModuleDescriptions() {
    const { id } = useParams();
    const [serviceData, setServiceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [banner, setBanner] = useState(null); // 🆕

    // Fetch service data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://biz-booster-landingpage-backend.vercel.app/api/page/get");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();

                const selectedService = data.data.find(service => service._id === id);
                if (!selectedService) throw new Error(`Service with id ${id} not found`);

                setServiceData(selectedService);
                setError(null);
            } catch (error) {
                console.error("Error fetching service data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // 🆕 Fetch banner for this page
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

            {/* 🆕 Dynamic Banner */}
            {banner && (
                <div className="position-relative">
                    <img
                        src={banner.imageUrl}
                        className="w-100"
                        alt="Module Banner"
                        style={{ height: "400px", objectFit: 'cover' }}
                    />
                    {/* <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
                        <p className="text-white fw-bold text-end w-75">
                            We streamline processes, drive growth, enhance branding, ensure legal compliance, provide home and IT solutions, foster education, offer financial planning, and support franchise expansion.
                        </p>
                    </div> */}
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

                <div className="desc-overlay">
                    <div>
                        <h1 className='text-white fw-bold text-center py-lg-5 double-underline'>
                            Type Of Category
                        </h1>

                        <Container>
                            <Row>
                                {categories.length > 0 ? (
                                    categories.map((category) => (
                                        <Col key={category._id} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='category-overlay my-4'>
                                            <div className='h-100 d-flex flex-column border border-1 px-4 rounded-4 category-card' style={{ minHeight: "100%", height: "100%" }}>
                                                <div className="d-flex justify-content-center align-items-center flex-grow-1" style={{ minHeight: "250px" }}>
                                                    <img src={category.image} className='img-fluid' alt={category.title} />
                                                </div>
                                                <div className="text-center mt-3">
                                                    <h3 className='fw-bold'>{category.title}</h3>
                                                    <p className='text p'>{category.description}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                ) : (
                                    <p className="text-center text-white">No categories available.</p>
                                )}
                            </Row>
                        </Container>

                        {/* Dynamic Title-Description Sections */}
                        {[1, 2, 3].map((index) => (
                            <div
                                key={index}
                                className='full-width-bg py-5'
                                style={{
                                    backgroundColor: index === 2 ? "rgba(0, 81, 157, 0.62)" : "rgb(255, 255, 255)",
                                }}
                            >
                                <Container className='py-5'>
                                    <h1
                                        className={`${index === 2 ? "text-white" : "blue"} fw-bold text-${index === 1 ? "start" : index === 2 ? "end" : "center"} mb-5 double-underline`}
                                    >
                                        {serviceData?.titleDescArray?.[index]?.title || "Default Section Title"}
                                    </h1>
                                    <p className={`text${index === 2 ? "-white" : "-secondary"} text`}>
                                        {serviceData?.titleDescArray?.[index]?.description || "No description available."}
                                    </p>
                                </Container>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModuleDescriptions;
