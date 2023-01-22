import Records from './city.list.json'


function Location(props){
    var ans=props.id;
    var count=0;
    return(
        <div>
            {Records.map((record) => {
            if(record.id===ans){
                count=1;
                return(
                    <div>
                            <h4 className="heading"><i className="fa-solid fa-location-dot"></i> {record.name}</h4>
                            <p className='ltln'>{record.coord.lon} & {record.coord.lat}</p>
                    </div>
                )
                
            }
            
            })}
        </div>
    )
}
export default Location;