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
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://landingpagebackend-nine.vercel.app/api/servicepage/get/${id}`);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                console.log("Fetched service data:", data.data);
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
                <div className="position-relative">
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

                <div className="desc-overlay">
                    <div>
                        <h1 className='text-white fw-bold text-center py-lg-5 double-underline'>Type Of Category</h1>
                        <Container>
                        <Row>
                        {categories.length > 0 ? (
                            categories.map((category, index) => {
                            // Safely extract image
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
                                <Col
                                key={`${category._id}-${index}`}
                                xs={12}
                                sm={12}
                                md={6}
                                lg={4}
                                xl={4}
                                xxl={4}
                                className="category-overlay my-4"
                                >
                                <div className="h-100 d-flex flex-column border border-1 px-4 rounded-4 category-card">
                                    <div
                                    className="d-flex justify-content-center align-items-center flex-grow-1"
                                    style={{ minHeight: "250px" }}
                                    >
                                    <img
                                        src={imageSrc}
                                        alt={category.title}
                                        className="img-fluid"
                                        style={{ maxHeight: "220px", objectFit: "contain" }}
                                    />
                                    </div>
                                    <div className="text-center mt-3">
                                    <h3 className="fw-bold">{category.title}</h3>
                                    <p className="text p">{category.description}</p>
                                    </div>
                                </div>
                                </Col>
                            );
                            })
                        ) : (
                            <p className="text-center text-white">No categories available.</p>
                        )}
                        </Row>



                        </Container>

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
