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
                console.log('API Response:', result); // Log the API response for debugging

                // Access the `data` property, which is an array
                if (result.data && Array.isArray(result.data)) {
                    // Find the item where category is 'nationwide'
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
        return <div>Loading...</div>; // or some loading spinner
    }

    return (
        <div className='text-white py-5' style={{ backgroundColor: "rgba(7, 33, 58, 0.74)" }}>
            <SEO title=" NationWide " description="This is NationWide Page." />
            <Container>
                <Row>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={5}
                        xl={5}
                        xxl={5}
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

                    <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                        <div className='ps-lg-4'>
                            <h2 className='fw-bold'>{data.heading}</h2>
                            <p className='text' style={{ textDecoration: 'underline' }}>
                                {data.subheading}
                            </p>

                            {data.features.map((feature, index) => (
                            <div key={index} className="d-flex flex-row align-items-start mb-4">
                                <img
                                src={data.arrayofimage[index]}
                                className='img-fluid mb-2'
                                alt={`Feature ${index}`}
                                style={{ width: "70px", height: "70px", objectFit: "cover" }}
                                />
                                <div className="text">
                                {feature}
                                </div>
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