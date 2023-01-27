import Records from './cities.json';
import Location from './Location';

function Searchcity(props){
    var ans=props.city;
    var x=-1;
    Records.map((record) => {
        if(record.name===ans){
            x=record.id
          
        }
        })
        return(
            <div>
             <Location id={x}/>

            </div>
        )
   
    }
    

export default Searchcity;