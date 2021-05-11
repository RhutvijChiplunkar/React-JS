
//THIS FILE IS USED TO PRINT THE NAMES AND ALL OTHER STUFF FROM THE DATABASE

import { Link } from 'react-router-dom';
import './CSS/TeamList.css';

const TeamList = ({teams}) => {
    return ( 
        <div>
            {teams.map(tm=>(
            <div className="players" key={tm.id}>
                <Link to={`/teams/${tm.id}`} >
                <h1>{tm.name}</h1>
                {/* <h2>Captain Name:: {tm.captain}</h2>
                <h3>Position:: {tm.rank}</h3> */}
                </Link>
            </div>
            ))}
        </div>  //end tag
     );
}
 
export default TeamList;