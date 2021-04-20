import { useState } from 'react';
import { useEffect } from 'react';
import TeamList from './TeamList';

const Teams = ({IPLteams}) => {

    //for fetching data
    const[teams,setTeams]=useState(null);
    const[isPending,setPending]=useState(true);

    //fetching data from json server with use effect
    useEffect(()=>{

        //make a fetch request ( it will get the required data from the db.json file)
        fetch('http://localhost:8000/IPLteams')
        .then(res=>{
            //returns another promise
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setTeams(data);
            setPending(false);
        })
    },[]);

    return ( 
    <div className="DB-fetch">
        {isPending && <div>Data is being loaded, please wait........</div>}
        {teams &&<TeamList teams={teams}/>}
    </div>  //end tag
     );
}
 
export default Teams;