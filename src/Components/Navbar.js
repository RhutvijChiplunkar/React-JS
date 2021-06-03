import './CSS/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar= () => {
    return (  
        <div className="nav-bar">
            <a href="https://www.cricbuzz.com/">CRICKBUZZ</a>
            <Link to="/">HOME</Link>
            <Link to="/list">LISTS</Link>
            <Link to="teams">TEAMS</Link>
            <Link to="/test">TEST</Link>
            {/* <Link to="/forms">FORMS</Link> */}
            <Link to="/addTeam">ADD A TEAM</Link>
        </div> 
    );
}
 
export default Navbar;      