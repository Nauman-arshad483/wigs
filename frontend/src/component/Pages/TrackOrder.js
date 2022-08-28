import React from 'react'
import { Fragment } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import "./TrackOrder.css"
const TrackOrder = () => {
  return <Fragment >
    <section className="track-order-main-fragment">
    <Container className='track-order-container'>
      <h1>TRACK YOUR ORDER</h1>
      <Row xs={1} lg={3} md={2} className='track-order-main-row '  >
        <Col className='left-col'>
        <Form className='left-form'>
          <Row className='mb-3' lg={1} md={1} sm={1} xs={1}>
              <Col >
              <Form.Group >
            <Form.Label>Order Number</Form.Label>
            <Form.Control type='text' className='form-elements' ></Form.Control>
          </Form.Group>
     
              </Col>
              <Col>
              <Form.Group controlId="formGridEmail"  >
            <Form.Label>Email</Form.Label>
            <Form.Control type='email'  className='form-elements'></Form.Control>
            </Form.Group>
          
              </Col>
          <Col>
          <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 5 }}>
          <Button type="submit">Send</Button>
        </Col>
      </Form.Group>
          </Col>
          </Row>
         
          </Form>
        </Col>
   <Col className='or-class'>
    <Row lg={1} md={2} className='or-row mb-3'>
      <Col className='upper-line'></Col>
      <Col>OR</Col>
      <Col className='lower-line'></Col>
    </Row>
   </Col>
        <Col className='right-col'>
        <Form className='right-form'>
          <Row lg={1} md={1} sm={1} xs={1}>
            <Col>
          <Form.Group >
            <Form.Label>Tracking Number</Form.Label>
            <Form.Control type='email' className='form-elements'></Form.Control>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 5 }}>
          <Button type="submit">Send</Button>
        </Col>
      </Form.Group>   
          </Col>
       
          </Row>
        
        </Form>
        </Col>
      </Row>

  
    </Container>
    </section>
    
  </Fragment>
}

export default TrackOrder