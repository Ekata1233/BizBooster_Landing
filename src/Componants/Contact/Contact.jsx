import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../Contact/Contact.css";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-background"></div>
      <div className="count-overlay">
        <Container>
          <h2 className="text-center text-white fw-bold py-5">
            Know About Business Model
          </h2>

          {/* Name Fields */}
          <Row className="my-4">
            <Col xs={12} sm={6} md={4}>
              <Form.Control type="text" placeholder="First Name" className="rounded-0 py-2" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Control type="text" placeholder="Middle Name" className="rounded-0 py-2" />
            </Col>
            <Col xs={12} md={4}>
              <Form.Control type="text" placeholder="Last Name" className="rounded-0 py-2" />
            </Col>
          </Row>

          {/* Phone Number */}
          <Row className="my-4">
            <Col xs={12} sm={8} md={6}>
              <Form.Control type="text" placeholder="Phone/Mobile No" className="rounded-0 py-2" />
            </Col>
          </Row>

          {/* Address Fields */}
          <Row className="my-4">
            <Col xs={12} sm={6} md={4}>
              <Form.Control type="text" placeholder="City" className="rounded-0 py-2" />
              <p className="my-2 text-white">0 of 50 max characters.</p>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Form.Control type="text" placeholder="State/Province" className="rounded-0 py-2" />
              <p className="my-2 text-white">0 of 50 max characters.</p>
            </Col>
            <Col xs={12} md={4}>
              <Form.Control type="text" placeholder="Pincode/Zipcode" className="rounded-0 py-2" />
              <p className="my-2 text-white">0 of 6 max characters.</p>
            </Col>
          </Row>

          {/* Business Model Selection */}
          <div>
            <Form>
              <Row className="d-flex flex-column flex-md-row align-items-start text-white">
                <p className="text-white fw-bold">Business Model</p>
                <Stack direction="horizontal" gap={3} className="flex-wrap">
                  <Form.Check type="radio" id="radio-1" label="Premium Partner" name="exampleRadio" />
                  <Form.Check type="radio" id="radio-2" label="Distributor Partner" name="exampleRadio" />
                  <Form.Check type="radio" id="radio-3" label="Franchise" name="exampleRadio" />
                </Stack>
              </Row>
            </Form>
          </div>

          {/* Remarks */}
          <Row>
            <p className="text-white fw-bold my-3">Remarks</p>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Enter remark" className="rounded-0" />
              </Form.Group>
            </Form>
            <p className="my-2 text-white">0 of 1000 max characters.</p>
          </Row>

          {/* Submit Button */}
          <Button variant="light" className="rounded-0 px-3 mt-3">
            Submit
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
