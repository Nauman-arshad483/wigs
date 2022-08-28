import React from 'react'
import './Footer.css'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import navbarLogo from '../../images/FullLogo_1.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Footer = () => {
    return (
        <Container>
            <footer id='footer'>
                <Container>
                    <Row xs={1} sm={1} md={2} lg={3}>
                        <Col className='footer-left-col'> <div className="leftFooter">
                            <img src={navbarLogo}></img>
                        </div></Col>
                        <Col className='footer-mid-col'><div className="midFooter">
                            <a><p>Privacy Policy</p></a>
                            <a><p>Refund Policy</p></a>
                            <a><p>Do not sell my personal information</p></a>
                        </div></Col>
                        <Col className='footer-right-col'>
                            <div className="rightFooter">
                                <p>SIGN UP AND SAVE</p>
                                <p>Subscribe to get special offers, free giveaways and once-in-a-lifetime deals</p>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type="email" className='footer-email' placeholder="Enter email" />
                                    </Form.Group>
                                </Form>
                            </div></Col>
                    </Row>
                </Container>



            </footer>
        </Container>
    )
}
export default Footer;