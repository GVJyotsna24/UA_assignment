import { Form } from "react-bootstrap";

function Searchbar(){
    return(
        <div>
            <Form>
            <Form.Group className="mb-3" >
                <Form.Control type="search" placeholder="Search your city here"/>
            </Form.Group>
            </Form>
        </div>
        
    )
}
export default Searchbar;