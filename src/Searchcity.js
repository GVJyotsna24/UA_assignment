import Records from './cities.json'
import Location from './Loction'

function Searchcity(props){
    var ans=props.city;
    return(
        <div>
            {Records.map((record) => {
            if(record.name===ans){
              return <Location id={record.id}/>
            }
            })}
        </div>
        
    )
    
}
export default Searchcity;