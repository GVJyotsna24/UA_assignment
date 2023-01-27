import Cards from './Cards';
import Records from './cities.json'
import Notfound from './Notfound';

function Location(props){
    var ans=props.id;
    if(ans===-1){
        return(<Notfound/>)
    }
    return(
        <div>
                
           
                {Records.map((record) => {
                    if(record.id===ans){
                        return(
                            <div>
                                    <h4 className="heading"><i className="fa-solid fa-location-dot"></i> {record.name}</h4>
                                    <p className='ltln'>{record.coord.lon} & {record.coord.lat}</p>
                                    <Cards id={record.id}/>
                            </div>
                        )
                        
                    }
                    
                    
                    })
                }
            
        </div>
    )
    
        
    
    
}
export default Location;