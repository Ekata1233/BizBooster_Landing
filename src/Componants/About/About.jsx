import React from 'react'
import Hero from "../../assets/business-success-1.png";
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import WelcomeBizBooster from '../WelcomeBizbooster/WelcomeBizBooster';
import OurMession from '../OurMession/OurMession';

function About() {
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
          <h1 className="text-white fw-bold text-start">About...</h1>
        </div>
      </div>
      <WelcomeBizBooster />
      <OurMession />
    </div>
  )
}

export default About