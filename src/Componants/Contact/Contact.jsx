import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Contact/Contact.css";
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div className="contact-container ">
      <div className="contact-background"></div>
      <div>
        <Container>
          <h2 className="text-center text-white fw-bold py-5">
            Know About Business Model
          </h2>
          <Row className="my-4">
            <Col><Form.Control type="text" placeholder="First Name " className="rounded-0 py-2" /></Col>
            <Col><Form.Control type="text" placeholder="Middle Name " className="rounded-0 py-2" /></Col>
            <Col><Form.Control type="text" placeholder="Last Name " className="rounded-0 py-2" /></Col>
          </Row>
          <Row className="my-4">
            <Col><Form.Control type="text" placeholder="Phone/Mobile No" className="rounded-0 py-2" /></Col>
          </Row>
          <Row className="my-4">
            <Col><Form.Control type="text" placeholder="City" className="rounded-0 py-2" /><p className="my-2 text-white">0 of 50 max characters.</p></Col>
            <Col><Form.Control type="text" placeholder="State/Province" className="rounded-0 py-2" /><p className="my-2 text-white">0 of 50 max characters.</p></Col>
            <Col><Form.Control type="text" placeholder="Pincode/Zipcode" className="rounded-0 py-2" /><p className="my-2 text-white">0 of 6 max characters.</p></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
