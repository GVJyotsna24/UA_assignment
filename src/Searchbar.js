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
            <p>Search for the valid cities from  filtered cities.json file for testing purpose</p>
            <Searchcity city={search}/>
        </div>
        
    )
}
export default Searchbar;