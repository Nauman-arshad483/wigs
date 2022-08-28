import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';
import "./ContactUs.css"
const ContactUs = () => {
  return <Fragment>
    <div className="contact-us">
      
        <h1>GET IN TOUCH</h1>
        <p>Use this text to share information about your brand with customers. Describe a product, share announcements, or welcome customer to your store.</p>
        <h1>CONTACT US</h1>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder='Enter Name'></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>email</Form.Label>
              <Form.Control type="text" placeholder='Enter Email'></Form.Control>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
          <Form.Group as={Col}>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3}></Form.Control>
          </Form.Group>
        </Row>
        <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 5 }}>
          <Button type="submit">Send</Button>
        </Col>
      </Form.Group>
        </Form>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
    </div>
  </Fragment>
}

export default ContactUs