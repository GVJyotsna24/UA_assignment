import { Card, Col, Container, Form, Row } from "react-bootstrap";
import '@fortawesome/fontawesome-free/js/all.js';
import Records from './city.json';

function Cards(){
    return(
        <div>
            <Container  className="cardscont">
                <Row>
                    <Col xs={12} md={2}  className=" col1 mb-3" >
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
                    <Col xs={6} md={2}  className='col2' >
                    <h6 className="cardDate">{Records[0].dt_txt}</h6>
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
                                        <li>{Records[0].main.temp_max}K</li>
                                        <li>{Records[0].main.temp_min}K</li>
                                        <li>{Records[0].main.humidity}%</li>
                                        <li>05:00 AM</li>
                                        <li>05:45 PM</li>
                                    </ul>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col  xs={6} md={2}  className="col3">
                    <h6 className="cardDate">{Records[1].dt_txt}</h6>
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
                                        <li>{Records[1].main.temp_max}K</li>
                                        <li>{Records[1].main.temp_min}K</li>
                                        <li>{Records[1].main.humidity}%</li>
                                        <li>05:00 AM</li>
                                        <li>05:45 PM</li>
                                    </ul>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={6} className="col4">
                    <h6 className="cardDate">{Records[2].dt_txt}</h6>
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
                                        <li>{Records[2].main.temp_max}K</li>
                                        <li>{Records[2].main.temp_min}K</li>
                                        <li>{Records[2].main.humidity}%</li>
                                        <li>05:00 AM</li>
                                        <li>05:45 PM</li>
                                    </ul>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={6} className="col5">
                    <h6 className="cardDate">{Records[3].dt_txt}</h6>
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
                                        <li>{Records[3].main.temp_max}K</li>
                                        <li>{Records[3].main.temp_min}K</li>
                                        <li>{Records[3].main.humidity}%</li>
                                        <li>05:00 AM</li>
                                        <li>05:45 PM</li>
                                    </ul>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={6}  className='col6'>
                    <h6 className="cardDate">{Records[4].dt_txt}</h6>
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
                                        <li>{Records[4].main.temp_max}K</li>
                                        <li>{Records[4].main.temp_min}K</li>
                                        <li>{Records[4].main.humidity}%</li>
                                        <li>05:00 AM</li>
                                        <li>05:45 PM</li>
                                    </ul>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>    
        </div>
        
    )
}

export default Cards;