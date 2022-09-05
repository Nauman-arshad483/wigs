import React, { Fragment, useState } from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import navbarLogo from "../../images/FullLogo_1.png";
import { AiOutlineShopping, BsSearch } from "react-icons/all";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "react-bootstrap/Carousel";
import Offcanvas from "react-bootstrap/Offcanvas";
const Header = () => {
  const [show, setShow] = useState(false);
  const offsetValue = -56;
  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };
  return (
    <Fragment>
      <div className="section ">
        <div className="carousel-div">
          <div className="carousel-portion">
            <Carousel>
              <Carousel.Item interval={1200}>
                <p>BEAUTIFUL HAIR IN PROFESSIONAL HANDS</p>
              </Carousel.Item>
              <Carousel.Item interval={1200}>
                <p>A HELPING HAND TO STYLE YOUR HAIR</p>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="section">
        {["md"].map((expand) => (
          <Navbar key={expand} expand={expand} className="">
            <Container fluid>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <div className="navbar-section">
                <div className="left-section">
                  <Navbar.Brand
                    as={Link}
                    to="/Search"
                    className="me-left left-bran"
                  >
                    {" "}
                    <BsSearch />
                  </Navbar.Brand>
                </div>
                <div className="middle-section">
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="start"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      ></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="middle-left-portion">
                        <Nav.Link as={Link} to="/Home">
                          Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Shop">
                          Shop
                        </Nav.Link>
                      </Nav>
                      <Nav className="ml-auto div-middle-center-portion"></Nav>
                      <Nav className="middle-center-portion ">
                        <Navbar.Brand as={Link} to="/" className="navbar-logo ">
                          <img src={navbarLogo}></img>
                        </Navbar.Brand>
                      </Nav>

                      <Nav className="middle-right-portion">
                        <Nav.Link as={Link} to="/TrackOrder">
                          Track Order
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ContactUs">
                          Contact Us
                        </Nav.Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </div>
                <div className="right-section">
                  <Navbar.Brand as={Link} to="/Search" className="navbar-right">
                    {" "}
                    <AiOutlineShopping />
                  </Navbar.Brand>
                </div>
              </div>
            </Container>
          </Navbar>
        ))}
      </div>
    </Fragment>
  );
};
export default Header;
