import { useState, useEffect } from 'react';
//THIS IS THE CUSTOM HOOK
const useFetch = (url) => {
       //for fetching data
       const[data,setData]=useState(null);
       const[isPending,setPending]=useState(true);
       const[error,setError]=useState(null);
   
       //fetching data from json server with use effect
       useEffect(()=>{
           setTimeout(()=>{
               //make a fetch request ( it will get the required data from the db.json file)
               fetch(url)
               .then(res=>{
                   //returns another promise
                   if(!res.ok){
                       throw Error("Data cant be fetched from this resource!!!!");
                   }
                   return res.json();
               })
               .then(data=>{
                   console.log(data);
                   setData(data);
                   setPending(false);
                   setError(null);
               })
               //this executes when error occurs or user throws an error
               .catch(err=>{
                   setPending(false);
                   setError(err.message);
               })
           },2500);
   
       },[url]);
       return {data, error, isPending};
}
 
export default useFetch;