const PropsEg = ({players}) => {
    /* var name=props.name;
    var place=props.place;
    var team=props.team; */
    
    return (  
        <div className="IPLteams">
            <h1>{players.team}</h1>
            {players.map(player=>(
            <div className="players" >
                <h2>Player Name:: {player.name}</h2>
                <h3>Position:: {player.place}</h3>
            </div>
            ))}
        </div>  //end tag
    );
}
 
export default PropsEg;