import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import {
  FaPhoneAlt,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import axios from 'axios';
import SEO from '../SEO';

function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await axios.get(`https://landing-page-backend-alpha.vercel.app/api/footer/get`);
        setFooterData(res.data);
      } catch (err) {
        console.error('Error fetching footer:', err);
      }
    };

    fetchFooter();
  }, []);

  // Filter social icons
  const socialIcons = {
    facebook: <FaFacebookF style={{ color: '#1877F2' }} />,
    instagram: <FaInstagram style={{ color: '#e44095ff' }} />,
    linkedin: <FaLinkedinIn style={{ color: '#0A66C2' }} />,
    whatsapp: <FaWhatsapp style={{ color: '#25D366' }} />,
    youtube: <FaYoutube style={{ color: '#FF0000' }} />
  };

  const renderSocialIcons = footerData?.socialLinks?.filter(link =>
    ["facebook", "instagram", "linkedin", "whatsapp", "youtube"].includes(link.type)
  );

  const renderDownloadLinks = footerData?.socialLinks?.filter(link =>
    ["playstore", "appstore"].includes(link.type)
  );

  return (
    <div className='text-white bg-dark pb-2'>
      <SEO title="Footer" description="This is Footer Page." />
      <Container className='text-white bg-dark py-5'>
        <Row>
          {/* Company Info */}
          <Col>
            <div>
              <h1>{footerData?.companyName || "FetchTrue"}</h1>
              <p>{footerData?.description || "Welcome to FetchTrue Group..."}</p>
              <h4>Our Social</h4>
              <div className='d-flex mb-3'>
                {renderSocialIcons?.map((item, idx) => (
                  <div key={idx} className='me-4 fs-4'>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {socialIcons[item.type]}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Official Info */}
          <Col>
            <div>
              <h4>Official info:</h4>
              <p>{footerData?.address}</p>
              <p><FiMail className="me-2" style={{ width: "20px", height: "20px" }} />{footerData?.email}</p>
              <p><FaPhoneAlt className="me-2" style={{ width: "20px", height: "20px" }} />{footerData?.phone}</p>
              <p><TbWorld className="me-2" style={{ width: "20px", height: "20px" }} />{footerData?.website}</p>
            </div>
          </Col>

          {/* Quick Links (static) */}
          <Col>
            <div>
              <h4>Quick Links</h4>
              <Nav className="flex-column text-start">
                <Nav.Link href="/contactus" className="text-white">
                  <MdOutlineKeyboardDoubleArrowRight /> Contact Us
                </Nav.Link>
                <Nav.Link href="/privacypolicy" className="text-white">
                  <MdOutlineKeyboardDoubleArrowRight /> Privacy Policy
                </Nav.Link>
                <Nav.Link href="/refund&returnpolicy" className="text-white">
                  <MdOutlineKeyboardDoubleArrowRight /> Return & Refund Policy
                </Nav.Link>
                <Nav.Link href="/termsandcondition" className="text-white">
                  <MdOutlineKeyboardDoubleArrowRight /> Terms & Conditions
                </Nav.Link>
              </Nav>
            </div>
          </Col>

          {/* Download Buttons (Play Store & App Store) */}
          <Col>
            <div>
              <h4>Download</h4>
              {renderDownloadLinks?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='d-block mb-2'
                >
                  <img
                    src={item.image}
                    alt={item.type}
                    className='img-fluid'
                    style={{ maxWidth: '180px' }}
                  />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom */}
      <p className='text-center'>2023 © All rights Reserved | FetchTrue</p>
    </div>
  );
}

export default Footer;
