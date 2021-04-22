/* import logo from './logo.svg';*/
import Test from './Components/MultipleComponents';
import ListsOp from './Components/MultipleComponents2'; 
import PropsEg from './Components/PropsExample';
import Teams from './Components/Teams';
import Navbar from './Components/Navbar';
import TeamList from './Components/TeamList'
import './App.css';
import './index.css'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


  function App() {
    /* var x=100;
    var y="Rhutvij Chiplunkar";
    var link="https://www.cricbuzz.com/"; */

    return (
      <Router>
        <div className="App"> 

          <div className="nv">
            <Navbar/>
          </div>

          <div className="title">
             <h1>Welcome to React JS</h1> 
          </div>

          <div className="main-paths">
            <Switch>
                <Route exact path="/teams">
                    <Teams/>
                </Route>
                <Route exact path="/list">
                    <ListsOp/>
                </Route>
                <Route exact path="/test">
                    <Test/>
                </Route>
            </Switch>
          </div>

        </div>
      </Router>
  );
}

export default App;     //always export the components
