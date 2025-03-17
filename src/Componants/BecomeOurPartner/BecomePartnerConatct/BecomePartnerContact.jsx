import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../Contact/Contact.css";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { motion } from "framer-motion";
import NationWide from "../../NationWide/NationWide";
import { useLocation } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function BecomePartnerContact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form") {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
    return (
        <div className="contact-container">
        <div className="contact-background"></div>
        <NationWide/>
        <div className="count-overlay">
         
          <Container  id="contact-form">
            <motion.h2
              className="text-center text-white fw-bold py-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
             Apply Now and Start Earning
            </motion.h2>
    
            <Row className="">
              {["First Name", "Middle Name", "Last Name"].map((placeholder, index) => (
                <Col key={index} xs={12} sm={6} md={4}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={fadeInUp}
                  >
                    <Form.Control type="text" placeholder={placeholder} className="rounded-3 py-2 my-3" />
                  </motion.div>
                </Col>
              ))}
            </Row>
    
            <Row className="">
              <Col xs={12} sm={8} md={6}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={fadeInUp}
                >
                  <Form.Control type="text" placeholder="Phone/Mobile No" className="rounded-3 py-2 my-4" />
                </motion.div>
              </Col>
              <Col xs={12} sm={8} md={6}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={fadeInUp}
                >
                  <Form.Control type="email" placeholder="name@example.com" className="rounded-3 py-2 my-4" />
                </motion.div>
              </Col>
            </Row>
    
           
    
            <Form>
              <Row className="d-flex flex-column flex-md-row align-items-start text-white">
                <motion.p
                  className="text-white fw-bold mt-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={fadeInUp}
                >
                  Interested In 
                </motion.p>
                <Stack direction="horizontal" gap={3} className="flex-wrap ">
                  {["Business Model", "Services", "other"].map((label, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      variants={fadeInUp}
                    >
                      <Form.Check type="radio" id={`radio-${index}`} label={label} name="exampleRadio" />
                    </motion.div>
                  ))}
                </Stack>
              </Row>
            </Form>
    
            <Row>
              <motion.p
                className="text-white fw-bold my-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInUp}
              >
                Remarks
              </motion.p>
              <Form>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={fadeInUp}
                >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Enter remark" className="rounded-3" />
                  </Form.Group>
                  <p className="my-2 text-white">0 of 1000 max characters.</p>
                </motion.div>
              </Form>
            </Row>
    
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              <Button  className="rounded-3 px-3 my-lg-5 w-100 fw-bold py-2  text-white" style={{backgroundColor:" #00509D"}}>
                Submit
              </Button>
            </motion.div>
          </Container>
        </div>
      </div>  )
}

export default BecomePartnerContact