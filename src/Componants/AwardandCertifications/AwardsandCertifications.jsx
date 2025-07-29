import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import '../AwardandCertifications/AwardsandCertifications.css';
import SEO from '../SEO';

const animationProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

function AwardsandCertifications() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    fetch('https://landingpagebackend-nine.vercel.app/api/gallery/get')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(res => {
        if (Array.isArray(res.data)) {
          const grouped = res.data.reduce((acc, item) => {
            const cat = item.category?.name || 'Uncategorized';
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(item);
            return acc;
          }, {});
          const groupedArray = Object.entries(grouped).map(([category, items]) => ({
            category,
            images: items.map(i => i.src),
          }));
          setData(groupedArray);
        } else {
          throw new Error('Invalid response format');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const formatTitle = (category) =>
    category.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

  const openLightbox = (images, index) => {
    setLightboxImages(images.map(src => ({ src })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center py-5">Error: {error}</div>;

  return (
    <div className="awards-container">
      <SEO title="Awards and Certifications" description="This is the Awards and Certifications page." />
      <div className="awards-background"></div>
      <div className="awards-overlay">
        {data.map((section, idx) => (
          <Container key={idx}>
            <Row className="py-5">
              <motion.h1 {...animationProps} className="fw-bold text-center mb-4">
                {formatTitle(section.category)}
              </motion.h1>

              {section.images.map((imgUrl, i) => (
                <Col key={i} xs={12} sm={6} md={4} lg={3} className="my-4">
                  <motion.img
                    {...animationProps}
                    src={imgUrl}
                    alt={`${section.category} ${i + 1}`}
                    loading="lazy"
                    className="award-img"
                    style={{ cursor: 'pointer' }}
                    onClick={() => openLightbox(section.images, i)}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
        index={lightboxIndex}
        plugins={[Thumbnails]}
        thumbnails={{ position: 'bottom', width: 100, height: 60 }}
      />
    </div>
  );
}

export default AwardsandCertifications;
