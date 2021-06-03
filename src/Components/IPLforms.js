import { useState } from "react";
import { useHistory } from 'react-router-dom';

const AddTeam = () => {
    const[id,setID]=useState(-1);
    const[name,setName]=useState('');
    const[captain,setCaptain]=useState('');
    const[rank,setRank]=useState(0);
    const[trophies,setTrophies]=useState(0);
    const[isPending,SetisPending]=useState(false);

    //object of use history
    const hist=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const team={id,name,captain,rank,trophies};

        SetisPending(true);
        fetch('http://localhost:8000/IPLteams',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(team)
        }).then(()=>{
            console.log('New Team Added'); 
            SetisPending(false);

            /*
            hist.go(-1);    //go to back page
            hist.go(1);     //go to back page
            */

            hist.push('/');
        })
    }
    return (  
        <div className="AddTeams">
            <h1>
                Add an IPL team
            </h1>
        
        <form onSubmit={handleSubmit}>
            <label>ID</label>
            <input type="text" 
            pattern="[0-9]*"
            required 
            value={id}
            onChange={(e)=>setID(e.target.value)}
            />
            <br></br>
            
            <label>Name</label>
            <input type="text" 
            required 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <br></br>

            <label>Captain</label>
            <input type="text" 
            required 
            value={captain}
            onChange={(e)=>setCaptain(e.target.value)}
            />
            <br></br>

            <label>Rank</label>
            <input type="text"
            pattern="[0-9]*" 
            required 
            value={rank}
            onChange={(e)=>setRank(e.target.value)}
            />
            <br></br>

            <label>Trophies</label>
            <input type="text"
            pattern="[0-9]*" 
            required 
            value={trophies}
            onChange={(e)=>setTrophies(e.target.value)}
            />
            <br></br>

            {!isPending && <button>Add A Team</button>}
            {isPending && <button>Adding a team....</button>}
        </form>

        </div>
    );
}
 
export default AddTeam;