//import logo from './logo.svg';
import './App.css';
import Test from './MultipleComponents';

function App() {
  var x=100;
  var y="Rhutvij Chiplunkar";
  var link="https://www.cricbuzz.com/";
  return (
    <div className="App">
    <div className="title">
      <h1 style={{color:'red',
        backgroundColor:'black',
        borderRadius:'100px'}}>Welcome to React</h1>
    </div>

    {/* Component created in other JS file and imported */}
    <Test></Test>
    <h2>{x}</h2>     {/* dynamic values for variables*/}
    <h2>Creator of this page is {y}</h2>

    <h3>Random number between 1-100 is::{Math.floor(Math.random()*100)}</h3>

    <a href={link}>Click Here to go to CRICKBUZZ!!</a>
    <br></br>

    <test />

    </div>
  );
}

export default App;     //always export the components
