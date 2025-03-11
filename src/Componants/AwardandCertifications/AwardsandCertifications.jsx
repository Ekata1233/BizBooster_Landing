import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

import '../AwardandCertifications/AwardsandCertifications.css';
import award1 from '../../assets/award-icon-4.jpg';
import award2 from '../../assets/download.jpg';
import award3 from '../../assets/png-clipart-major-league-lacrosse-weekly-awards-prize-trophy-competition-3d-villain-trophy-villain-3d-arrows-thumbnail.png';
import award4 from '../../assets/images.jpg';
import award5 from '../../assets/e76a1bda49a25d7e3d34d235dd374fbb.jpg';
import award6 from '../../assets/gold-trophy-illustration-trophy-gold-medal-award-prize-golden-trophy-transparent-background-png-clipart--comhiclipartddbgu.jpg';
import award7 from '../../assets/download.jpg';
import award8 from '../../assets/award-icon-4.jpg';

import awardcertificate1 from '../../assets/pngtree-honor-certificate-of-individual-enterprise-image_2225482.jpg';
import awardcertificate2 from '../../assets/pngtree-honor-certificate-of-individual-enterprise-image_2225482.jpg';
import awardcertificate3 from '../../assets/pngtree-honor-certificate-of-individual-enterprise-image_2225482.jpg';
import awardcertificate4 from '../../assets/pngtree-honor-certificate-of-individual-enterprise-image_2225482.jpg';
import awardcertificate5 from '../../assets/pngtree-honor-certificate-of-individual-enterprise-image_2225482.jpg';
import awardcertificate6 from '../../assets/pngtree-honor-certificate-of-individual-enterprise-image_2225482.jpg';


import opening1 from '../../assets/images (2).jpg';
import opening2 from '../../assets/images (2).jpg';
import opening3 from '../../assets/images (2).jpg';
import opening4 from '../../assets/images (2).jpg';

const awards = [
  { src: award1, alt: 'Award 1' },
  { src: award2, alt: 'Award 2' },
  { src: award3, alt: 'Award 3' },
  { src: award4, alt: 'Award 4' },
  { src: award5, alt: 'Award 5' },
  { src: award6, alt: 'Award 6' },
  { src: award7, alt: 'Award 7' },
  { src: award8, alt: 'Award 8' },
];

const certificates = [
  { src: awardcertificate1, alt: 'Certificate 1' },
  { src: awardcertificate2, alt: 'Certificate 2' },
  { src: awardcertificate3, alt: 'Certificate 3' },
  { src: awardcertificate4, alt: 'Certificate 4' },
  { src: awardcertificate5, alt: 'Certificate 5' },
  { src: awardcertificate6, alt: 'Certificate 6' },
];
const opening = [
    { src: opening1, alt: 'opening 1' },
    { src: opening2, alt: 'opening 2' },
    { src: opening3, alt: 'opening 3' },
    { src: opening4, alt: 'opening 4' },
  
  ];
const animationProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

function AwardsandCertifications() {
  return (
    <div className='awards-container'>
      <div className='awards-background'></div>
      <div className='awards-overlay'>
        <Container>
          <Row className='py-5'>
            <motion.h1 {...animationProps} className='fw-bold text-center mb-4'>Awards</motion.h1>
            {awards.map((award, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-4'>
                <motion.img {...animationProps} src={award.src} alt={award.alt} loading="lazy" className="award-img" />
              </Col>
            ))}
          </Row>
        </Container>

        <Container>
          <Row className='py-5'>
            <motion.h1 {...animationProps} className='fw-bold text-center mb-4'>Certifications</motion.h1>
            {certificates.map((certificate, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-4'>
                <motion.img {...animationProps} src={certificate.src} alt={certificate.alt} loading="lazy" className="award-img" />
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row className='py-5'>
            <motion.h1 {...animationProps} className='fw-bold text-center mb-4'>Opening Ceremony</motion.h1>
            {opening.map((opening, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-4'>
                <motion.img {...animationProps} src={opening.src} alt={opening.alt} loading="lazy" className="award-img" />
              </Col>
            ))}
          </Row>
        </Container>


        <Container>
          <Row className='py-5'>
            <motion.h1 {...animationProps} className='fw-bold text-center mb-4'>Event of 2023</motion.h1>
            {opening.map((opening, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-4'>
                <motion.img {...animationProps} src={opening.src} alt={opening.alt} loading="lazy" className="award-img" />
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row className='py-5'>
            <motion.h1 {...animationProps} className='fw-bold text-center mb-4'>Event of 2024</motion.h1>
            {opening.map((opening, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className='my-4'>
                <motion.img {...animationProps} src={opening.src} alt={opening.alt} loading="lazy" className="award-img" />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AwardsandCertifications;