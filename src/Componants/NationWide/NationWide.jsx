import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import nation from '../../assets/nation.png'
import img1 from '../../assets/nationimg.png'

const data = [
    {
        image: img1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.'
    },
    {
        image: img1,
        text: 'Another descriptive text for the second item.'
    },
    {
        image: img1,
        text: 'More information about the third item.'
    },
    {
        image: img1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.'
    },
    {
        image: img1,
        text: 'Another descriptive text for the second item.'
    },
    {
        image: img1,
        text: 'More information about the third item.'
    }
]
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
function NationWide() {
    return (
        <div className='text-white py-5' style={{ backgroundColor: "rgba(7, 33, 58, 0.74)" }}>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                        <img src={nation} className='img-fluid' alt='Nation' />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                        <div className='ps-lg-4'>
                            <h2 className='fw-bold'>Become a Growth Partner with BizBooster</h2>
                            <p className='text' style={{ textDecoration: 'underline' }}>
                                & unlock endless possibilities for unlimited income
                            </p>

                            {data.map((item, index) => (
                                <div key={index} className="d-flex align-items-start mb-3">
                                    <div>
                                        <img src={item.image} className='img-fluid' alt={`Item ${index}`} style={{ width: "80px" }} />
                                    </div>
                                    <div className="ms-3 text">
                                        {item.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NationWide