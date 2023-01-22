import { useState } from "react";
import { Form } from "react-bootstrap";
import Searchcity from './Searchcity'

function Searchbar(){
    const [search, setSearch]=useState();
    return(
        <div>
            <Form>
            <Form.Group className="mb-3" >
                <Form.Control type="search" placeholder="Search your city here" value={search} onChange={e=>setSearch(e.target.value)} />
            </Form.Group>
            </Form>
            <Searchcity city={search}/>
        </div>
        
    )
}
export default Searchbar;