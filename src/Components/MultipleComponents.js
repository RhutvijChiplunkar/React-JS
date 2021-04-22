//import './index.css'
import './CSS/MultipleComponents.css'
import { useState } from 'react';

const Test= () => {

     //functions inside the components
    const Output=()=>{
        console.log('Events inside components');
    }
   
    const Func=(a)=>{
        console.log("Hello "+a);
    }

    //second value re-renders the component, we get new updates value
    const [name, setName]=useState('Javascript');

    //make the value of name 'Reactive'
    const HooksEg=()=>{
        setName("React Javascript");
    }
    return ( 
        <div className="testComp">
            <h1>Multiple Components</h1>
             {/* reference to a function, dont call by '()' as it will anyway execute without click*/}
            <button onClick={Output}>Click here!!!</button>

            {/* Anonymous arrow function should be used to execute functions where parameters must be passed
            It fires the Anonymous function and invokes the required function*/}
            <button onClick={()=>{
                Func('Rhutvij');
                Func('ABC');
            }}>Click me here!!</button>

            {/* useState HOOK  */} 
            <h1>{name}</h1>
            {/*this will dynamically change value as "useState" is used  */} 
            <button onClick={HooksEg}>CLick to check HOOKS working</button>    

            

        </div>

     );
}
 
export default Test;