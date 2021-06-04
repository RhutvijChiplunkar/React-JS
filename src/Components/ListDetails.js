import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';

const ListDetails = () => {
    const {id}=useParams();
    const{data:tm, error, isPending }=useFetch('http://localhost:8000/IPLteams/'+ id );
    const hist=useHistory();

    const handleClick=()=>{
        fetch('http://localhost:8000/IPLteams/'+ tm.id,{
            method:'DELETE'
        }).then(()=>{
            console.log("Team successfully deleted");
            hist.push('/');
        })
    }
    return ( 
        <div className="list-details">
            {isPending && <div>Loading....</div>}
            {error && <div>{ error }</div>}
            {tm && (
                <article style={{color:'rebeccapurple',textAlign:'center',marginTop:'50px'}}>
                    <h1>Team: {tm.name}</h1>
                    <h2>Captain: {tm.captain}</h2>
                    <h3>IPL 2021 position: {tm.rank}</h3>
                    <h3>Trophies Won: {tm.trophies}</h3>
                    <button onClick={handleClick}>Delete Team</button>
                </article>
            )}
        </div>
     );
}
 
export default ListDetails;