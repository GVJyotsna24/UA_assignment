import { Col, Container, Row } from "react-bootstrap";
import Searchbar from './Searchbar'
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';

function Head(){
    return(
        <Container className="headcont">
            <Row>
                <Col xs={12} md={8}>
                    <div>
                        <h4 className="heading"><i className="fa-solid fa-location-dot"></i> Agra,UttarPradesh</h4>
                        <p className='ltln'>27'10'36 & 78'0'29' E</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <Searchbar/>
                </Col>
            </Row>
            
        </Container>
    )
}
export default Head;