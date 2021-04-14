import { useState } from 'react';
import PropsEg from './PropsExample';

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
        {name : 'Jadeja', team: 'CSK', place:1}
    ]);

    return (  
        <div className="comp">
            {/*Similar to for loop*/}
            {list.map(lst=>(
                <div className="preview">
                    <h2>The name is :: {lst.name} {lst.surname}</h2>
                    <p>{lst.id}</p>
                </div>
            ))
            }

        {/* Props in React.js */}
        <PropsEg players={players}/>
        <PropsEg players={players.filter(player=>player.team==="CSK")} title="CSK team members"/>
        </div>
    );
}
 
export default ListsOp;