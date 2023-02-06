import { Card, Col, Container, Form, Row } from "react-bootstrap";
import '@fortawesome/fontawesome-free/js/all.js';
import Records from './cities.json';
import React,{useEffect, useState} from 'react';
import axios from "axios";



function Cards(props){
    var y=props.id
    var baseURL='http://api.openweathermap.org/data/2.5/forecast?id='+y+'&appid=1cd36dd008450d3817f0c09111fe9881';
    const [post, setPost] = useState(null);

        useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
        });
        
    }, [baseURL]);

  if (!post) return null;

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
                    <h6 className="cardDate">{post.list[0].dt_txt}</h6>
                        <Card >
                            <Card.Header className="cardHead">
                            <Row>
                                    {/* <Col md={3}> */}
                                        {/* <i className="fa-regular fa-2xl fa-sun"></i> */}

                                    {/* </Col> */}
                                    <Col  >
                                        <h6>{post.list[0].weather[0].description}</h6>

                                    </Col>
                                </Row>
                            </Card.Header>
                                <Card.Body className="CardBody">
                                <ul className=" list list-unstyled">
                                        <li>{post.list[0].main.temp_max}K</li>
                                        <li>{post.list[0].main.temp_min}K</li>
                                        <li>{post.list[0].main.humidity}%</li>
                                        <li>{post.city.sunrise}</li>
                                        <li>{post.city.sunset}</li>
                                    </ul>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col  xs={6} md={2}  className="col3">
                    <h6 className="cardDate">{post.list[4].dt_txt}</h6>
                        <Card>
                            <Card.Header className="cardHead">
                            <Row>
                                    {/* <Col md={3}> */}
                                        {/* <i className="fa-regular fa-2xl fa-snowflake"></i> */}

                                    {/* </Col> */}
                                    <Col  md>
                                    <h6>{post.list[4].weather[0].description}</h6>

                                    </Col>
                                </Row>
                            </Card.Header>
                                <Card.Body className="CardBody">
                                <ul className=" list list-unstyled">
                                        <li>{post.list[4].main.temp_max}K</li>
                                        <li>{post.list[4].main.temp_min}K</li>
                                        <li>{post.list[4].main.humidity}%</li>
                                        <li>{post.city.sunrise}</li>
                                        <li>{post.city.sunset}</li>
                                    </ul>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={6} className="col4">
                    <h6 className="cardDate">{post.list[15].dt_txt}</h6>
                        <Card>
                            <Card.Header className="cardHead">
                                <Row>
                                    {/* <Col md={3}> */}
                                        {/* <i className="fa-solid fa-2xl fa-cloud-rain"></i> */}

                                    {/* </Col> */}
                                    <Col  md>
                                        <h6>{post.list[15].weather[0].description}</h6>

                                    </Col>
                                </Row>
                            </Card.Header>
                                <Card.Body className="CardBody">
                                <ul className=" list list-unstyled">
                                        <li>{post.list[15].main.temp_max}K</li>
                                        <li>{post.list[15].main.temp_min}K</li>
                                        <li>{post.list[15].main.humidity}%</li>
                                        <li>{post.city.sunrise}</li>
                                        <li>{post.city.sunset}</li>
                                    </ul>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={6} className="col5">
                    <h6 className="cardDate">{post.list[20].dt_txt}</h6>
                        <Card>
                            <Card.Header className="cardHead">
                                <Row>
                                    {/* <Col md={3}> */}
                                        {/* <i className="fa-solid fa-2xl fa-wind"></i> */}

                                    {/* </Col> */}
                                    <Col md>
                                    <h6>{post.list[20].weather[0].description}</h6>
                                    </Col>
                                </Row>
                                
                            
                                
                            </Card.Header>
                                <Card.Body className="CardBody">
                                <ul className=" list list-unstyled">
                                        <li>{post.list[20].main.temp_max}K</li>
                                        <li>{post.list[20].main.temp_min}K</li>
                                        <li>{post.list[20].main.humidity}%</li>
                                        <li>{post.city.sunrise}</li>
                                        <li>{post.city.sunset}</li>
                                    </ul>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={6}  className='col6'>
                    <h6 className="cardDate">{post.list[30].dt_txt}</h6>
                        <Card>
                            <Card.Header className="cardHead">
                                <Row>
                                    {/* <Col md={3}> */}
                                        {/* <i className="fa-solid fa-2xl fa-cloud-rain"></i> */}
                                        
                                    {/* </Col> */}
                                    <Col md>
                                    <h6>{post.list[30].weather[0].description}</h6>
                                        
                                    </Col>
                                </Row>
                            </Card.Header>
                                <Card.Body className="CardBody">
                                <ul className=" list list-unstyled">
                                        <li>{post.list[30].main.temp_max}K</li>
                                        <li>{post.list[30].main.temp_min}K</li>
                                        <li>{post.list[30].main.humidity}%</li>
                                        <li>{post.city.sunrise}</li>
                                        <li>{post.city.sunset}</li>
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