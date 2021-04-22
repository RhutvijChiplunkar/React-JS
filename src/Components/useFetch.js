import { useState, useEffect } from 'react';
//THIS IS THE CUSTOM HOOK
const useFetch = (url) => {
       //for fetching data
       const[data,setData]=useState(null);
       const[isPending,setPending]=useState(true);
       const[error,setError]=useState(null);
   
       //fetching data from json server with use effect
       useEffect(()=>{
            /* This is used to stop the fetch */
            const abortConst=new AbortController();

           setTimeout(()=>{
               //make a fetch request ( it will get the required data from the db.json file)
               fetch(url,{signal:abortConst.signal})
               .then(res=>{
                   //returns another promise
                   if(!res.ok){
                       throw Error("Data cant be fetched from this resource!!!!");
                   }
                   return res.json();
               })
               .then(data=>{
                   setData(data);
                   setPending(false);
                   setError(null);
               })
               //this executes when error occurs or user throws an error
               .catch(err=>{
                   if(err.name ==='AbortError'){
                       console.log("fetch abborted successfully");
                   }
                   else{
                   setPending(false);
                   setError(err.message);
                }
               })
           },1000);
           
           /* cleanup function using abortConst*/
           return ()=>abortConst.abort();
       },[url]);
       return {data, error, isPending};
}
 
export default useFetch;