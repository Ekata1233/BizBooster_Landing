import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

import Header from '../Header/Header';
import WelcomeBizBooster from '../WelcomeBizbooster/WelcomeBizBooster';
import OurMession from '../OurMession/OurMession';
import SEO from '../SEO';

function About() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchAboutBanners = async () => {
      try {
        const res = await axios.get('https://landing-page-backend-alpha.vercel.app/api/banner/get/AboutUs');
        setBanners(res.data);
      } catch (error) {
        console.error('Error fetching About banners:', error);
      }
    };

    fetchAboutBanners();
  }, []);

  return (
    <div>
      <SEO title="About Page" description="This is About Page." />

      {/* Banner Section */}
      {banners.length > 0 && (
        <div className="position-relative">
          <img
            src={banners[0].imageUrl}
            className="w-100"
            alt="About Banner"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
            {/* <h1 className="text-white fw-bold text-start">About...</h1> */}
          </div>
        </div>
      )}

      {/* Content Sections */}
      <WelcomeBizBooster />
      <OurMession />
    </div>
  );
}

export default About;
