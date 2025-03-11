import React from 'react'
import Hero from "../../assets/istockphoto-1311934969-612x612.jpg";
import '../ContactUs/ContactUs.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
function ContactUs() {
    return (
        <div>
            <div className="position-relative">
                <img
                    src={Hero}
                    className="w-100"
                    alt="Hero"
                    style={{ height: "400px" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
                    <h1 className="text-white fw-bold text-start">Contact Us...</h1>

                </div>
            </div>
            <div className='contact-container'>
                <div className='contact-background'></div>
                <div className='contact-overlay'>
                    <Container className='py-5'>
                        <Row className="align-items-center mb-5 pt-5">
                            <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6}>
                                <h1 className="fw-bold">Get in touch for any kind of help and information</h1>
                            </Col>
                            <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6}>
                                <p className=" text">
                                    We’re glad to discuss your organisation’s situation. So please contact us via the details below, or enter your request.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6}>
                                <div className="custom-margin d-flex align-items-start gap-3">
                                    <span
                                        className='p-4'
                                        style={{ backgroundColor: "rgba(255, 255, 255, 0.29)", border: "1px solid white" }}
                                    >
                                        <FaLocationDot className='fs-3' />
                                    </span>
                                    <span>
                                        <h4 className='fw-bold'>Our head office address:</h4>
                                        <p>3rd Floor, C307, Amanora Chamber, Mall, Amanora Park Town, Hadapsar, Pune, Maharashtra 411002</p>
                                    </span>
                                </div>

                                <div className="custom-margin d-flex align-items-start gap-3">
                                    <span
                                        className='p-4'
                                        style={{ backgroundColor: "rgba(255, 255, 255, 0.29)", border: "1px solid white" }}
                                    >
                                        <FaLocationDot className='fs-3' />
                                    </span>
                                    <span>
                                        <h4 className='fw-bold'>Our Presence:</h4>
                                        <p>Hadapsar, Pune, Maharashtra</p>
                                    </span>
                                </div>

                                <div className="custom-margin d-flex align-items-start gap-3">
                                    <span
                                        className='p-4'
                                        style={{ backgroundColor: "rgba(255, 255, 255, 0.29)", border: "1px solid white" }}
                                    >
                                        <FaLocationDot className='fs-3' />
                                    </span>
                                    <span>
                                        <h4 className='fw-bold'>Call for help:</h4>
                                        <p>+91 93095 17500</p>
                                    </span>
                                </div>

                                <div className="custom-margin d-flex align-items-start gap-3">
                                    <span
                                        className='p-4'
                                        style={{ backgroundColor: "rgba(255, 255, 255, 0.29)", border: "1px solid white" }}
                                    >
                                        <FaLocationDot className='fs-3' />
                                    </span>
                                    <span>
                                        <h4 className='fw-bold'>Mail us for information:</h4>
                                        <p>info@bizbooster.com</p>
                                    </span>
                                </div>
                            </Col>


                            <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6}>

                                <Form className='mt-4'>
                                    <Row >
                                    <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} mb-4>
                                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="enter first name" />
                                    </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} mb-4>
                                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="enter last name" />
                                    </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} mb-4>
                                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} md={12} lg={6} xl={6} xxl={6} mb-4>
                                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Phone No.</Form.Label>
                                        <Form.Control type="text" placeholder="enter phone no." />
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                    <Col xs={12} sm={6} md={12} lg={12} xl={12} xxl={12} mb-4>
                                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Services</Form.Label>
                                        <Form.Control type="text" placeholder="enter services" />
                                    </Form.Group>
                                    </Col >
                                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                                <Button className='w-100  text-white fw-bold border-none' style={{backgroundColor:" #00509D"}}>Submit</Button>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        </div>

    )
}

export default ContactUs