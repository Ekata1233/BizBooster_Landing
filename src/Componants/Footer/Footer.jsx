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
import './Footer.css'; // Import the CSS file

function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await axios.get(`https://landingpagebackend-nine.vercel.app/api/footer/get`);
        setFooterData(res.data);
      } catch (err) {
        console.error('Error fetching footer:', err);
      }
    };

    fetchFooter();
  }, []);

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
      <Container className='py-5'>
        <Row className="gy-4">
          {/* Company Info */}
          <Col xs={12} md={6} lg={3} className="footer-col">
            <h1>{footerData?.companyName || "FetchTrue"}</h1>
            <p>{footerData?.description || "Welcome to FetchTrue Group..."}</p>
            <h4>Our Social</h4>
            <div className='d-flex flex-wrap gap-3'>
              {renderSocialIcons?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='fs-4'
                >
                  {socialIcons[item.type]}
                </a>
              ))}
            </div>
          </Col>

          {/* Official Info */}
          <Col xs={12} md={6} lg={3} className="footer-col">
            <h4>Official Info:</h4>
            <p>{footerData?.address}</p>
            <p><FiMail className="me-2" />{footerData?.email}</p>
            <p><FaPhoneAlt className="me-2" />{footerData?.phone}</p>
            <p><TbWorld className="me-2" />{footerData?.website}</p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={6} lg={3} className="footer-col">
            <h4>Quick Links</h4>
            <Nav className="flex-column">
              <Nav.Link href="/contactus" className="text-white mb-2">
                <MdOutlineKeyboardDoubleArrowRight /> Contact Us
              </Nav.Link>
              <Nav.Link href="/privacypolicy" className="text-white mb-2">
                <MdOutlineKeyboardDoubleArrowRight /> Privacy Policy
              </Nav.Link>
              <Nav.Link href="/refund&returnpolicy" className="text-white mb-2">
                <MdOutlineKeyboardDoubleArrowRight /> Return & Refund Policy
              </Nav.Link>
              <Nav.Link href="/termsandcondition" className="text-white mb-2">
                <MdOutlineKeyboardDoubleArrowRight /> Terms & Conditions
              </Nav.Link>
            </Nav>
          </Col>

          {/* Download Section */}
          <Col xs={12} md={6} lg={3} className="footer-col">
            <h4>Download</h4>
            <div className="d-flex flex-column align-items-start">
              {renderDownloadLinks?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mb-2'
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
      <div className='text-center mt-4 px-2'>
        <p className='mb-0'>2023 © All rights Reserved | FetchTrue</p>
      </div>
    </div>
  );
}

export default Footer;
