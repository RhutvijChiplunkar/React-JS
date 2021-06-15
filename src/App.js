/* import logo from './logo.svg';*/
import Test from './Components/MultipleComponents';
import ListsOp from './Components/MultipleComponents2'; 
import PropsEg from './Components/PropsExample';
import Teams from './Components/Teams';
import Navbar from './Components/Navbar';
import TeamList from './Components/TeamList';
import Forms from './Components/forms';
import './App.css';
import './index.css'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import ListDetails from './Components/ListDetails';
import AddTeam from './Components/IPLforms';
import NotFound from  './Components/NotFound';
import Home from './Components/Home'

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
                 
          <div className="main-paths">
            <Switch>
                <Route exact path="/">
                    <Home/>  
                </Route>

                <Route exact path="/teams">
                  <Teams/>  
                </Route>

                <Route  path="/teams/:id">
                  <ListDetails/>  
                </Route>

                <Route exact path="/list">
                    <ListsOp/>
                </Route>

                <Route exact path="/test">
                    <Test/>
                </Route>

                {/* <Route exact path="/forms">
                  <Forms/>  
                </Route> */}

                <Route exact path="/addTeam">
                  <AddTeam/>  
                </Route>

                <Route path="*">
                  <NotFound/>
                </Route>

            </Switch>
          </div>

        </div>
      </Router>
  );
}

export default App;     //always export the components
