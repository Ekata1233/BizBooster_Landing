import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { FaFacebookF, FaPhoneAlt, FaVoicemail } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import playstrore from '../../assets/Google Play (1).png'
function Footer() {
    return (
        <div className='text-white bg-dark '>
            <Container className='text-white bg-dark py-5'>
                <Row >

                    <Col className=''>
                        <div>
                            <h1>BizBooster</h1>
                            <p>
                                Welcome to BozBooster Group! We are dedicated to helping you build a secure financial future and make smart investment decisions. Join us on the path to financial success!
                            </p>
                            <div className='d-flex'>
                                <div className='me-4 fs-4'>
                                    <FaFacebookF />
                                </div>
                                <div className='me-4 fs-4'>
                                    <FaXTwitter />
                                </div>
                                <div className='me-4 fs-4'> <FaInstagram /></div>
                                <div className='me-4 fs-4'> <FaLinkedinIn /></div>
                                <div className='me-4 fs-4'><FaWhatsapp /></div>
                                <div className='me-4 fs-4'> <FaYoutube /></div>
                            </div>




                        </div>
                    </Col>

                    <Col>
                        <div>
                            <h4>Official info:</h4>
                            <p>Office no.307, 3rd Floor, Amanora Chamber,  Amanora Mall, Hadapsar, Pune- 411028</p>
                            <p className=""> <FiMail className="me-2" style={{ width: "20px", height: "20px" }} />info@bizbooster2x.com</p>
                            <p className=""> <FaPhoneAlt className="me-2" style={{ width: "20px", height: "20px" }} />+91 9309517500</p>

                            <p className=""> <TbWorld className="me-2" style={{ width: "20px", height: "20px" }} /> www.bizbooster2x.com.</p>

                        </div>
                    </Col>
                    <Col>
                        <div className=''>
                           
                            <Nav className="flex-column text-start">
                            <h4>Quick Links</h4>
                                <Nav.Link href="#" className="text-white">
                                    <MdOutlineKeyboardDoubleArrowRight className="" /> Contact Us
                                </Nav.Link>
                                <Nav.Link href="#" className="text-white">
                                    <MdOutlineKeyboardDoubleArrowRight className="" /> Privacy Policy
                                </Nav.Link>
                                <Nav.Link href="#" className="text-white">
                                    <MdOutlineKeyboardDoubleArrowRight className="" /> Refund Policy
                                </Nav.Link>
                                <Nav.Link href="#" className="text-white">
                                    <MdOutlineKeyboardDoubleArrowRight className="" /> Terms & Conditions
                                </Nav.Link>
                            </Nav>

                        </div>
                    </Col>
                    <Col> <div>
                        <h4>Download</h4>
                        <img src={playstrore} className=' img-fluid my-3'/>
                        {/* <img src={appstore}/> */}
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer