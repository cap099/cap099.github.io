import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


function App() {
  return (
      <Router>
    <div className="App">
      <header className="App-header">
          <Nav />
      </header>
    </div>
    </Router>
  );
}

export default App;


function Nav(){
    return (
        <div className="nav-bar" style={{display: "block"}}>
            <h1>Caleb Patton</h1>
            <Nav_button name="about"/>
        </div>
    );
}

function Nav_button(props){
    return (
        <div className="nav-button">
            <Link to={'/' + props.name}  style={{ textDecoration: 'none' }}>
                <li>{props.name}</li>
            </Link>
        </div>
    );
}



