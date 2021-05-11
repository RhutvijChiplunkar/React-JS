import { useState } from 'react';
import { useEffect } from 'react';
import PropsEg from './PropsExample';
import './CSS/MultipleComponents2.css'


const ListsOp = () => {
    const[list,setLists]=useState([
        {name : 'Rhutvij', surname: 'Chiplunkar', id:1},
        {name : 'ABC', surname: 'XYZ', id:2},
        {name : 'UVW', surname: 'PQR', id:3}
    ]); 

    const[players,setPlayer]=useState([
        {name : 'Virat', team: 'RCB', place:8},
        {name : 'Rohit', team: 'MI', place:2},
        {name : 'Dhoni', team: 'CSK', place:1},
        {name : 'Rahul', team: 'PBKS', place:6},
        {name : 'Jadeja', team: 'CSK', place:1},
        {name : 'Dinesh', team: 'KKR', place:3},
        {name : 'Raina', team: 'CSK', place:1},
        {name : 'Shami', team: 'PBKS', place:6},
        {name : 'Sanju', team: 'RR', place:7}
    ]);



    //function as a prop (here used for deleting a value)
    //It will create new array, original array is unaltered
    //This function will delete all the players with same place
    const handleDelete=(place)=>{
        const newPlayer=players.filter(player=>player.place!==place);
        setPlayer(newPlayer);   //useState Hook is used here
    }
/*
    //useEfect hook -> runs for every render
    useEffect(()=>{
        console.log("useEffect hook used here. This runs on every render");
    });

    //useEffect with dependency argument
    useEffect(()=>{
        console.log("useEffect hook used here, this does not run on every render");
    },[]);
*/
    useEffect(()=>{
        console.log("useEffect hook used here, this does not run on every render. It runs acc to dependency condition");
    },[players]);

    return (  
        <div className="comp">
            {/*Similar to for loop*/}
            {list.map(lst=>(
                <div className="preview" key={lst.id}>
                    <h2>The name is :: {lst.name} {lst.surname}</h2><br></br>
                    <p>{lst.id}</p><br></br>
                </div>
            ))
            }

        {/* Props in React.js */}
        <PropsEg players={players} handleDelete={handleDelete}/>

        {/*using filter so that we get only selected values
        <PropsEg players={players.filter(player=>player.team==="CSK")} title="CSK team members"/>*/}
        </div>
    );
}
 
export default ListsOp;