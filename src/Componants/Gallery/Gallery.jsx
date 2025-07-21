import React, { useEffect, useState } from 'react';
import AwardsandCertifications from '../AwardandCertifications/AwardsandCertifications';
import SEO from '../SEO';
import axios from 'axios';

function Gallery() {
  const [heroImage, setHeroImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get('https://landing-page-backend-alpha.vercel.app/api/banner/get/Gallery');
        if (response.data && response.data.length > 0) {
          setHeroImage(response.data[0].imageUrl);
        }
      } catch (error) {
        console.error('Error fetching gallery banner:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  return (
    <div>
      <SEO title="Gallery" description="This is Gallery Page." />

      <div className="position-relative">
        {loading ? (
          <div
            style={{ height: '400px', backgroundColor: '#e0e0e0' }}
            className="d-flex justify-content-center align-items-center"
          >
            <span>Loading banner...</span>
          </div>
        ) : heroImage ? (
          <img
            src={heroImage}
            className="w-100"
            alt="Gallery Banner"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{ height: '400px', backgroundColor: '#cfcfcf' }}
            className="d-flex justify-content-center align-items-center"
          >
            <span>No banner available</span>
          </div>
        )}

        <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
          {/* Optional overlay content */}
        </div>
      </div>

      <AwardsandCertifications />
    </div>
  );
}

export default Gallery;
