import React from 'react'
import Hero from "../../assets/become-our-partner.jpg";
import BecomePartnerContact from './BecomePartnerConatct/BecomePartnerContact'
import { Container } from 'react-bootstrap';

function BecomeOurPartner() {
    return (
        <div>
            <div className="position-relative">
                <img
                    src={Hero}
                    className="w-100"
                    alt="Hero"
                    style={{ height: "400px" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
                    <h1 className="text-white fw-bold text-start">Become Our Partner...</h1>

                </div>
            </div>
            <div className='py-5'>
                <Container>
                    <h2 className='fw-bold blue'>Disclaimer</h2>
                    <p className='fw-bold text'>Elevate Your Business with Our Premier Fintech B2B Platform</p>
                    <p className='text text-secondary'>Unlock a new era of excellence with our cutting-edge B2B platform tailored for the fintech landscape. As the exclusive partner of over 200 renowned brands, we provide unmatched access to premium products and services across India. Our innovative business model ensures seamless transactions and offers advance payouts, empowering partners to accelerate their growth effortlessly.

                        With a PAN India operational network, we bridge businesses with limitless opportunities, driving success beyond geographical boundaries. Step into the future of B2B partnerships—where innovation, trust, and efficiency converge. Partner with us and redefine what's possible.</p>
                </Container>
            </div>
            <BecomePartnerContact />
        </div>
    )
}

export default BecomeOurPartner