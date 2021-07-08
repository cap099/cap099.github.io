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
            <NavButton name="Bio"/>
            <NavButton name="Projects"/>
            <NavButton name="Resume"/>
            <NavButton name="Cotact"/>
        </div>
    );
}

function NavButton(props){
    return (
        <div className="nav-button">
            <Link to={'/' + props.name}  style={{ textDecoration: 'none' }}/>
                {props.name}
        </div>
    );
}



/* <div className="landing_nav_div sections" style="display: block;">

    <div>
        <a href="#">
                <br>BIO</br>
        </a>
    </div>

    <div>
    <a href="#">
            <br>PROJECTS</br>
    </a>
    </div>

    <div>
        <a href="#">
                <br>TOOLING</br>
        </a>
    </div>
    <div>
        <a href="#">
                <br>RESUME</br>
             
        </a>
    </div>
    <div>
        <a href="#">
                <br>CONTACT</br>
        </a>
    </div>
    <div>
        <a href="/content/blog/">
                <br>BLOG</br>
        </a>
    </div>
</div> */

