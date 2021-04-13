import { useState } from 'react';

const ListsOp = () => {
    const[list,setList]=useState([
        {name : 'Rhutvij', surname: 'Chiplunkar', id:1},
        {name : 'ABC', surname: 'XYZ', id:2},
        {name : 'UVW', surname: 'PQR', id:3}
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
        </div>
    );
}
 
export default ListsOp;