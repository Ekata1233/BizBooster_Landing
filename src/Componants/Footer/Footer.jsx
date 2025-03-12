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
        <div className='text-white bg-dark pb-2'>
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
                                    <a
                                        href="https://www.facebook.com/share/1BXEeQnmYF/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-white'
                                    >
                                        <FaFacebookF />
                                    </a>

                                </div>
                                <div className='me-4 fs-4'>
                                    <FaXTwitter />
                                </div>
                                <div className='me-4 fs-4'>
                                <a
                                        href="https://www.instagram.com/biz.booster.2x?igsh=MXRmcmViYWVjNXE2YQ==" target="_blank" rel="noopener noreferrer"
                                          className='text-white'
                                    >
                                        <FaInstagram />
                                    </a>
                                </div>
                                <div className='me-4 fs-4'>
                                <a
                                         href="https://www.linkedin.com/company/ftfl-technology-pvt-ltd/posts?lipi=urn%3Ali%3Apage%3Ad_flagship3_company_admin%3B74v7ipTfSPiXlWl47Q2SSw%3D%3D" target="_blank" rel="noopener noreferrer"
                                          className='text-white'
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className='me-4 fs-4'>
                                <a
                                        href=" https://wa.me/919309517500" target="_blank" rel="noopener noreferrer"
                                          className='text-white'
                                    >
                                        <FaWhatsapp />
                                    </a>
                                </div>
                                
                                
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
                        <img src={playstrore} className=' img-fluid my-3' />
                        {/* <img src={appstore}/> */}
                    </div>
                    </Col>
                   
                </Row>
                
            </Container>
            <p className='text-center'>2023 © All rights Reserved | BizBooster2X</p>
        </div>
    )
}

export default Footer