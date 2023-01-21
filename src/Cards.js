import { Card, Col, Container, Form, Row } from "react-bootstrap";
import '@fortawesome/fontawesome-free/js/all.js';

function Cards(){
    return(
        <Container  className="cardscont">
            <Row>
                <Col md={3}  className=" col1 mb-3" >
                    <Card className="card">
                        <Card.Header className="card1h">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Select Date:</Form.Label>
                                    <Form.Control type="date"/>
                                </Form.Group>
                            </Form>
                        </Card.Header>
                            <Card.Body className="card1b" >
                                <ul  className="list-unstyled">
                                    <li>High Temperature</li>
                                    <li>Low Temperature</li>
                                    <li>Humidity</li>
                                    <li>Sunrise time</li>
                                    <li>Sunset time</li>
                                </ul>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md={2}  className='col2' >
                <h6 className="cardDate">20 Jan 2023</h6>
                    <Card >
                        <Card.Header className="cardHead">
                        <Row>
                                <Col md={3}>
                                    <i className="fa-regular fa-2xl fa-sun"></i>

                                </Col>
                                <Col  md={9}>
                                    <h4>Sunny</h4>

                                </Col>
                            </Row>
                        </Card.Header>
                            <Card.Body className="CardBody">
                            <ul className=" list list-unstyled">
                                    <li>25C</li>
                                    <li>17C</li>
                                    <li>76%</li>
                                    <li>05:00 AM</li>
                                    <li>05:45 PM</li>
                                </ul>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md={2}  className="col3">
                <h6 className="cardDate">21 Jan 2023</h6>
                    <Card>
                        <Card.Header className="cardHead">
                        <Row>
                                <Col md={3}>
                                    <i className="fa-regular fa-2xl fa-snowflake"></i>

                                </Col>
                                <Col  md={9}>
                                    <h4>Snowy</h4>

                                </Col>
                            </Row>
                        </Card.Header>
                            <Card.Body className="CardBody">
                            <ul className=" list list-unstyled">
                                    <li>25C</li>
                                    <li>17C</li>
                                    <li>76%</li>
                                    <li>05:00 AM</li>
                                    <li>05:45 PM</li>
                                </ul>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md={2}  className="col4">
                <h6 className="cardDate">22 Jan 2023</h6>
                    <Card>
                        <Card.Header className="cardHead">
                            <Row>
                                <Col md={3}>
                                     <i className="fa-solid fa-2xl fa-cloud-rain"></i>

                                </Col>
                                <Col  md={9}>
                                    <h4>Rainy</h4>

                                </Col>
                            </Row>
                        </Card.Header>
                            <Card.Body className="CardBody">
                            <ul className=" list list-unstyled">
                                    <li>25C</li>
                                    <li>17C</li>
                                    <li>76%</li>
                                    <li>05:00 AM</li>
                                    <li>05:45 PM</li>
                                </ul>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md={2}  className="col5">
                <h6 className="cardDate">23 Jan 2023</h6>
                    <Card>
                        <Card.Header className="cardHead">
                            <Row>
                                <Col md={3}>
                                    <i className="fa-solid fa-2xl fa-wind"></i>

                                </Col>
                                <Col md={9}>
                                <h4>Windy</h4>
                                </Col>
                            </Row>
                            
                           
                            
                        </Card.Header>
                            <Card.Body className="CardBody">
                            <ul className=" list list-unstyled">
                                    <li>25C</li>
                                    <li>17C</li>
                                    <li>76%</li>
                                    <li>05:00 AM</li>
                                    <li>05:45 PM</li>
                                </ul>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md={2}  className='col6'>
                <h6 className="cardDate">24 Jan 2023</h6>
                    <Card>
                        <Card.Header className="cardHead">
                            <Row>
                                <Col md={3}>
                                    <i className="fa-solid fa-2xl fa-cloud-rain"></i>
                                    
                                </Col>
                                <Col md={9}>
                                    <h4>Rainy</h4>
                                    
                                </Col>
                            </Row>
                        </Card.Header>
                            <Card.Body className="CardBody">
                            <ul className=" list list-unstyled">
                                    <li>25C</li>
                                    <li>17C</li>
                                    <li>76%</li>
                                    <li>05:00 AM</li>
                                    <li>05:45 PM</li>
                                </ul>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cards;