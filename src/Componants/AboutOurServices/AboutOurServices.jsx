import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import srives from '../../assets/4.-BFSI-Services-1270x755.jpg'
import servicesicon1 from '../../assets/onboarding_icon.png'

import servicesicon2 from '../../assets/business_icon.png'

import servicesicon3 from '../../assets/brand_marketing_icon.png'

import servicesicon4 from '../../assets/legal_services_icon.png'

import servicesicon5 from '../../assets/home_service_icon.png'

import servicesicon6 from '../../assets/it _services_icon.png'

import servicesicon7 from '../../assets/education_icon.png'

import servicesicon8 from '../../assets/finance_icon.png'
import servicesicon9 from '../../assets/franchise_icon.png'

function AboutOurServices() {
  return (
    <div className='bg-white '>
       <div className='div-bg py-5'>
       <Container>
            <h2 className='fw-bold text-center mb-5'>About Our Services</h2>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={4} xl={4} xx={4}>
                            <div className='rounded rounded-4 mb-2' style={{ border:"1px solid #D9D9D9"}}>
                                <img src={servicesicon1} className='img-fluid bg-blue w-100' />
                                <p className='text-center ' style={{fontWeight:"600" }}>Onboarging</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={4} xx={4}>
                        <div className='rounded rounded-4 mb-2' style={{ border:"1px solid #D9D9D9"}}>
                                <img src={servicesicon2} className='img-fluid'/>
                                <p className='text-center ' style={{fontWeight:"600"}}>Business</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={4} xx={4}>
                        <div className='rounded rounded-4 mb-2' style={{ border:"1px solid #D9D9D9"}}>
                                <img src={servicesicon3} className='img-fluid'/>
                                <p className='text-center ' style={{fontWeight:"600"}}>Branding/Marketing</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={4} xx={4}>
                        <div className='rounded rounded-4 mb-2' style={{ border:"1px solid #D9D9D9"}}>
                                <img src={servicesicon4} className='img-fluid'/>
                                <p className='text-center ' style={{fontWeight:"600"}}>Legal Services</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={4} xx={4}>
                        <div className='rounded rounded-4 mb-2' style={{ border:"1px solid #D9D9D9"}}>
                                <img src={servicesicon5} className='img-fluid'/>
                                <p className='text-center ' style={{fontWeight:"600"}}>Home Services </p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={4} xx={4}>
                        <div className='rounded rounded-4 mb-2' style={{ border:"1px solid #D9D9D9"}}>
                                <img src={servicesicon6} className='img-fluid'/>
                                <p className='text-center ' style={{fontWeight:"600"}}>IT services</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={4} xx={4}>
                        <div className='rounded rounded-4 mb-2' style={{ border:"1px solid #D9D9D9"}}>
                                <img src={servicesicon7} className='img-fluid'/>
                                <p className='text-center ' style={{fontWeight:"600"}}>Education</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={4} xx={4}>
                        <div className='rounded rounded-4 mb-2' style={{ border:"1px solid #D9D9D9"}}>
                                <img src={servicesicon8} className='img-fluid'/>
                                <p className='text-center ' style={{fontWeight:"600"}}>Finance Services</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={4} xl={4} xx={4}>
                        <div className='rounded rounded-4 mb-2' style={{ border:"1px solid #D9D9D9"}}>
                                <img src={servicesicon9} className='img-fluid'/>
                                <p className='text-center ' style={{fontWeight:"600"}}>Franchise</p>
                            </div>
                        </Col>

                    </Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <img src={srives} className='img-fluid'/>
                </Col>
            </Row>
        </Container>
       </div>
    </div>
  )
}

export default AboutOurServices