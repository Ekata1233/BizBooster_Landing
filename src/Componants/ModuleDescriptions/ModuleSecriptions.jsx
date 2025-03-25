import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hero from "../../assets/description.png";
import '../ModuleDescriptions/ModuleDescription.css';
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../SEO';

function ModuleDescriptions() {
    const { id } = useParams(); // Get the `id` from the URL
    const [serviceData, setServiceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data based on the `id` from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://biz-booster-landingpage-backend.vercel.app/api/page/get");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log("API Response:", data); // Debugging: Log the API response

                // Find the service with the matching `id`
                const selectedService = data.data.find(service => service._id === id);
                console.log("Selected Service:", selectedService); // Debugging: Log the selected service

                if (!selectedService) {
                    throw new Error(`Service with id ${id} not found`);
                }

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

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }

    if (error) {
        return <div>Error: {error}</div>; // Show an error message if something went wrong
    }

    if (!serviceData) {
        return <div>No data found for the selected service.</div>; // Handle case where no data is found
    }

    return (
        <div>
            <SEO title="Module Description" description="This is the Module Description Page." />
            <div className="position-relative">
                <img
                    src={Hero}
                    className="w-100"
                    alt="Hero"
                    style={{ height: "400px" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
                    <p className="text-white fw-bold text-end w-75">
                        We streamline processes, drive growth, enhance branding, ensure legal compliance, provide home and IT solutions, foster education, offer financial planning, and support franchise expansion.
                    </p>
                </div>
            </div>

            <div className="desc-container">
                <div className="desc-background"></div>

                <div className='bg-white py-5'>
                    <Container>
                        <div>
                            <h1 className='fw-bold blue'>{serviceData.titleDescArray[0].title}</h1>
                            <p className='text-secondary text py-3'>{serviceData.titleDescArray[0].description}</p>
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
                                {serviceData.categoryname.map((category) => (
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
                                 
                                ))}
                            </Row>
                        </Container>

                        <div className='full-width-bg mt-5 py-5' style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                            <Container className='py-5'>
                                <h1 className='blue fw-bold text-start mb-5 double-underline'>
                                    {serviceData.titleDescArray[1].title}
                                </h1>
                                <p className='text-secondary text'>
                                    {serviceData.titleDescArray[1].description}
                                </p>
                            </Container>
                        </div>

                        <div className='full-width-bg py-5' style={{ backgroundColor: "rgba(0, 81, 157, 0.62)" }}>
                            <Container className='py-5'>
                                <h1 className='text-white fw-bold text-end mb-5 double-underline'>
                                    {serviceData.titleDescArray[2].title}
                                </h1>
                                <p className='text-white text'>
                                    {serviceData.titleDescArray[2].description}
                                </p>
                            </Container>
                        </div>

                        <div className='full-width-bg py-5' style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                            <Container className='py-5'>
                                <h1 className='text-dark fw-bold text-center mb-5 double-underline'>
                                    {serviceData.titleDescArray[3].title}
                                </h1>
                                <p className='text-secondary text'>
                                    {serviceData.titleDescArray[3].description}
                                </p>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModuleDescriptions;