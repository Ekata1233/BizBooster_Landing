import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Container
} from "react-bootstrap";
import "../Header/Header.css";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaUsers,
  FaImages,
  FaPhone
} from "react-icons/fa";
import SEO from "../SEO";

function Header() {
  const [show, setShow] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null); // ✅ Fix added

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://landingpagebackend-nine.vercel.app/api/servicepage/getAll-titles');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setServices(data.data || []);
      } catch (err) {
        console.error("Error fetching titles:", err);
        setError("Failed to load services.");
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`mb-3 custom-navbar ${scrolling ? "scrolled" : ""}`}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <SEO title="Navbar" description="This is Navbar Page." />
      <Container>
        <Navbar.Brand
          href="/"
          className="fs-1"
          style={{
            fontWeight: "700",
            color: scrolling ? "white" : "black",
          }}
        >
          FetchTrue.
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleShow}
          style={{ borderColor: "white" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </Navbar.Toggle>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
          style={{ width: "280px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <Navbar.Brand href="/" className="fs-1" style={{ fontWeight: "600" }}>
                FetchTrue
              </Navbar.Brand>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 my-2">
              <Nav.Link
                href="/"
                className={`nav-link-animated me-3 ${scrolling ? "text-white" : "text-dark"}`}
                style={{ fontWeight: "600" }}
              >
                <FaHome className="me-3 blue d-lg-none" /> Home
              </Nav.Link>

              <Nav.Link
                href="/about"
                className={`nav-link-animated me-3 ${scrolling ? "text-white" : "text-dark"}`}
                style={{ fontWeight: "600" }}
              >
                <FaInfoCircle className="me-3 blue d-lg-none" /> About Us
              </Nav.Link>

              <NavDropdown
                style={{ fontWeight: "600" }}
                title={
                  <span>
                    <FaConciergeBell className="me-3 blue d-lg-none" /> Services
                  </span>
                }
                id="offcanvasNavbarDropdown"
                className="nav-link-animated me-3 custom-dropdown"
              >
                {error && (
                  <NavDropdown.Item disabled>{error}</NavDropdown.Item>
                )}

                {services.length === 0 && !error && (
                  <NavDropdown.Item disabled>Loading...</NavDropdown.Item>
                )}

                {services.map((service) => (
                  <NavDropdown.Item
                    key={service._id}
                    href={`/moduledescription/${service._id}`}
                  >
                    {service.servicetitle}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown
                title={
                  <span>
                    <FaUsers className="me-3 blue d-lg-none" /> Join Us
                  </span>
                }
                id="offcanvasNavbarDropdown"
                className="nav-link-animated me-3 custom-dropdown"
                style={{ fontWeight: "600" }}
              >
                <NavDropdown.Item href="https://biz-booster-provider-panel.vercel.app/signup" target="_blank" rel="noopener noreferrer">
  Service Provider
</NavDropdown.Item>
                <NavDropdown.Item href="/becomeourpartner">
                  Become Our Partner
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="/gallery"
                className={`nav-link-animated me-3 ${scrolling ? "text-white" : "text-dark"}`}
                style={{ fontWeight: "600" }}
              >
                <FaImages className="me-3 blue d-lg-none" /> Gallery
              </Nav.Link>

              <Nav.Link
                href="/contactus"
                className={`nav-link-animated me-3 ${scrolling ? "text-white" : "text-dark"}`}
                style={{ fontWeight: "600" }}
              >
                <FaPhone className="me-3 blue d-lg-none" /> Contact Us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
