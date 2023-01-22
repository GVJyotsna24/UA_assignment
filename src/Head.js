import { Col, Container, Row } from "react-bootstrap";
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Searchbar from "./Searchbar";
import Location from './Loction'

function Head(){
    return(
        <Container className="headcont">
            <Row>
                <Col xs={12} md={4}>
                    <Location/>
                </Col>
                <Col xs={12} md={4}>
                    <Searchbar/>
                    
                </Col>
                <Col xs={12} md={4}>
                </Col>
            </Row>
        </Container>
        
    )
}
export default Head;