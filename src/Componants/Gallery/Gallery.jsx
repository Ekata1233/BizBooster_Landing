import React from 'react'
import Hero from "../../assets/gallery.png";
import AwardsandCertifications from '../AwardandCertifications/awardsandCertifications';
function Gallery() {
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
        <h1 className="text-white fw-bold text-start">Gallery...</h1>
    <AwardsandCertifications/>
      </div>
    </div>
    
    </div>
  )
}

export default Gallery