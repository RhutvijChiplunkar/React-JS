const TeamList = ({teams}) => {
    return ( 
        <div className="fetchData">
            {teams.map(tm=>(
            <div className="players" >
                <h1>{tm.name}</h1>
                <h2>Captain Name:: {tm.captain}</h2>
                <h3>Position:: {tm.rank}</h3>
            </div>
            ))}
        </div>  //end tag
     );
}
 
export default TeamList;