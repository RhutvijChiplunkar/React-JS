import './CSS/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar= () => {
    return (  
        <div className="nav-bar">
            <Link to="/">HOME</Link>
            <Link to="/list">LISTS</Link>
            <Link to="teams">TEAMS</Link>
            <Link to="/test">TEST</Link>
        </div> 
    );
}
 
export default Navbar;