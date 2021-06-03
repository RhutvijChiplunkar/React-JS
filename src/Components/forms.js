import { useState } from "react";

const Forms = () => {
    const[name,setName]=useState('');
    const[surname,setSurname]=useState('');
    const[user,setUser]=useState('xyz');

    const handleSubmit=(e)=>{
        e.preventDefault();

        const pers={name,surname,user};
        console.log(pers);
    }
    
    return ( 
        <div className="ReactForm">

                <h3>
                    My Form!!
                </h3>

            <form onSubmit={ handleSubmit }>

                <label>Name</label>
                <input type="text" 
                required 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <br></br>
                
                <label>Surname</label>
                <input type="text" 
                required 
                value={surname}
                onChange={(e)=>setSurname(e.target.value)}
                />
                <br></br>
                    
                <label>Username</label>
                <input type="text" 
                required 
                value={user}
                onChange={(e)=>setUser(e.target.value)}
                />
                <br></br>
                
                <label>Gender</label>
                <select>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
                <br></br>

                <button type="submit">Submit Form</button>
                
            </form>
        </div> 
    );
}
 
export default Forms;