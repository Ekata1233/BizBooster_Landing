import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { motion } from "framer-motion";
import SEO from '../SEO';

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Termsandcondition() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [bannerUrl, setBannerUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Terms & Conditions content
        const termsRes = await fetch('https://biz-booster.vercel.app/api/termsconditions');
        const termsData = await termsRes.json();
        const html = termsData?.data?.[0]?.content || '';
        setContent(html);

        // Fetch Banner for this page
        const bannerRes = await fetch('https://landingpagebackend-nine.vercel.app/api/banner/page/AboutUs');
        const bannerData = await bannerRes.json();
        const bannerImage = bannerData?.[0]?.imageUrl || null;
        setBannerUrl(bannerImage);

        setLoading(false);
      } catch (err) {
        console.error('Error loading data:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <div>
      <SEO title="Terms & Conditions" description="This is Terms & Conditions Page." />

      {/* Hero Image */}
      {bannerUrl && (
        <div className="position-relative">
          <motion.img
            src={bannerUrl}
            className="w-100"
            alt="Hero"
            style={{ height: "300px", objectFit: "inherit" }}
            initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center" />
        </div>
      )}

      {/* Content */}
      <Container>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={scrollVariants}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="blue fw-bold text-center py-5"
        >
          Terms & Conditions
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scrollVariants}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-secondary"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </div>
  );
}

export default Termsandcondition;
