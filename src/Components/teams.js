/* import { useState } from 'react';
import { useEffect } from 'react'; */
import TeamList from './TeamList';
import useFetch from './useFetch';

const Teams = () => {

    const{data:teams, error, isPending}=useFetch('http://localhost:8000/IPLteams');

    /*  A CUSTOM HOOK IS CREATED FOR THIS CODE (WE CAN USE CUSTOM HOOK MULTIPLE TIMES)
    //for fetching data
    const[teams,setTeams]=useState(null);
    const[isPending,setPending]=useState(true);
    const[error,setError]=useState(null);

    //fetching data from json server with use effect
    useEffect(()=>{
        setTimeout(()=>{
            //make a fetch request ( it will get the required data from the db.json file)
            fetch('http://localhost:8000/IPLteams')
            .then(res=>{
                //returns another promise
                if(!res.ok){
                    throw Error("Data cant be fetched from this resource!!!!");
                }
                return res.json();
            }) 
            .then(data=>{
                console.log(data);
                setTeams(data);
                setPending(false);
                setError(null);
            })
            //this executes when error occurs or user throws an error
            .catch(err=>{
                setPending(false);
                setError(err.message);
            }) 
        },2500);

    },[]);
    */

    return ( 
    <div className="DB-fetch">
        {/*below is conditional rendering*/}
        {error && <div>{error}</div>}
        {isPending && <div>Data is being loaded, please wait........</div>}
        {teams && <TeamList teams={teams}/>}
    </div>  //end tag
     );
}
 
export default Teams;