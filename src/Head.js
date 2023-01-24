import { Col, Container, Row } from "react-bootstrap";
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Searchbar from "./Searchbar";
import Location from './Loction'

function Head(){
    return(
        <Container className="headcont">
            <Row>
                
                    <Location/>
              
                
                   

            </Row>
            <Row>
                <Searchbar/>
            </Row>
        </Container>
        
    )
}
export default Head;