import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { motion } from "framer-motion";
import SEO from '../SEO';

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function ReturnandRefundPolicy() {
  const [policyData, setPolicyData] = useState('');
  const [loading, setLoading] = useState(true);
  const [bannerUrl, setBannerUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch policy content
        const policyRes = await fetch('https://biz-booster.vercel.app/api/refundpolicy');
        const policyJson = await policyRes.json();
        setPolicyData(policyJson?.data?.[0]?.content || '');

        // Fetch banner for this page
        const bannerRes = await fetch('https://landingpagebackend-nine.vercel.app/api/banner/page/AboutUs');
        const bannerJson = await bannerRes.json();
        const bannerImage = bannerJson?.[0]?.imageUrl || null;
        setBannerUrl(bannerImage);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
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
      <SEO title="Return & Refund Policy" description="This is Return & Refund Policy Page." />

      {/* Dynamic Hero Image */}
      {bannerUrl && (
        <div className="position-relative">
          <motion.img
            src={bannerUrl}
            className="w-100"
            alt="Banner"
            style={{ height: "300px", objectFit: "cover" }}
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
          Return & Refund Policy
        </motion.h1>

        <motion.div
          className="text-secondary"
          initial="hidden"
          whileInView="visible"
          variants={scrollVariants}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          dangerouslySetInnerHTML={{ __html: policyData }}
        />
      </Container>
    </div>
  );
}

export default ReturnandRefundPolicy;
