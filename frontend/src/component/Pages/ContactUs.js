import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import "./ContactUs.css";
import MetaData from "../layout/MetaData";
const ContactUs = () => {
  return (
    <Fragment>
      <MetaData title="Contact-Innovtiviewigs" />
      <div className="section contact-us-section">
        <div className="contact-us">
          <h1>GET IN TOUCH</h1>
          <p>
            Use this text to share information about your brand with customers.
            Describe a product, share announcements, or welcome customer to your
            store.
          </p>
          <h1>CONTACT US</h1>
          <Form className="form-box">
            <Row className="row1" xs={1} sm={1} md={2}>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  className="con"
                ></Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                ></Form.Control>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3}></Form.Control>
              </Form.Group>
            </Row>
            <Form.Group as={Row} className="mb-3">
              <Col className="bt-col">
                <Button
                  style={{
                    border: 0,

                    backgroundColor: "black",
                    padding: "6px 30px",
                    fontSize: "18px",
                  }}latest 
                  type="submit"
                >
                  Send
                </Button>
              </Col>
            </Form.Group>
          </Form>
          <div className="reCaptcha">
            <p>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
