import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [scrolled, setScrolled] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await fetch('https://landingpagebackend-nine.vercel.app/api/footer/get');
        const data = await res.json();

        const whatsappLinkObj = data.socialLinks?.find(
          (link) =>
            link.type?.toLowerCase() === 'whatsapp' ||
            link.link?.includes('wa.me')
        );

        if (whatsappLinkObj) {
          const match = whatsappLinkObj.link.match(/wa\.me\/(\d+)/);
          if (match) {
            setWhatsappNumber(match[1]);
          }
        }
      } catch (err) {
        console.error('Error fetching footer:', err);
      }
    };

    fetchFooter();
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent('Hello! I need help.');
    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
  };

  if (!whatsappNumber) return null; // Hide button if no number found

  return (
    <div
      className={`whatsapp-bubble ${scrolled ? 'scrolled' : ''}`}
      onClick={handleClick}
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </div>
  );
};

export default WhatsAppButton;
