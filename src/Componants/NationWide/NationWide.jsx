import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../SEO';

const NationWide = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://landingpagebackend-nine.vercel.app/api/item/get');
                const result = await response.json();

                if (result.data && Array.isArray(result.data)) {
                    const nationwideData = result.data.find(item => item.category === 'nationwide');
                    setData(nationwideData);
                } else {
                    console.error('API response does not contain a valid array:', result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div
            className="nationwide-section text-white py-5"
            style={{
                backgroundImage: `url(/src/assets/GettyCenter,jpeg)`, // Use data.backgroundImage if available
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }}
        >
            {/* Overlay to darken background and enhance readability */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(17, 91, 159, 0.41)',
                    zIndex: 1,
                }}
            ></div>

            <SEO title="NationWide" description="This is NationWide Page." />

            {/* Content container with higher z-index */}
            <Container style={{ position: 'relative', zIndex: 2 }}>
                <Row>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={5}
                        className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                    >
                        <img
                            src={data.image}
                            className="img-fluid hover-zoom"
                            alt="Nation"
                            style={{
                                maxHeight: "400px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                transition: "transform 0.4s ease-in-out",
                            }}
                        />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={7}>
                        <div className='ps-lg-4'>
                            <h2 className='fw-bold' >{data.heading}</h2>
                            <p className='text' style={{ textDecoration: 'underline' }}>
                                {data.subheading}
                            </p>

                            {data.features.map((feature, index) => (
                                <div key={index} className="d-flex flex-row align-items-start mb-4">
                                    <img
                                        src={data.arrayofimage[index]}
                                        className='img-fluid mb-2 me-3'
                                        alt={`Feature ${index}`}
                                        style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: '8px' }}
                                    />
                                    <div className="text">{feature}</div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NationWide;
