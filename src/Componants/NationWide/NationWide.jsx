import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NationWide = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://biz-booster-landingpage-backend.vercel.app/api/item/get');
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
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                        <img src={data.image} className='img-fluid' alt='Nation' />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                        <div className='ps-lg-4'>
                            <h2 className='fw-bold'>{data.heading}</h2>
                            <p className='text' style={{ textDecoration: 'underline' }}>
                                {data.subheading}
                            </p>

                            {data.features.map((feature, index) => (
                                <div key={index} className="d-flex align-items-start mb-3">
                                    <div>
                                        <img src={data.arrayofimage[index]} className='img-fluid' alt={`Feature ${index}`} style={{ width: "80px" }} />
                                    </div>
                                    <div className="ms-3 text">
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