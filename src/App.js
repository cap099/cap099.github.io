import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Bio from './components/Bio.js'
import Projects from './components/Projects.js'
import Home from './components/Home.js'
import Resume from './components/Resume.js'
import Courses from './components/Courses.js'


function App() {
  return (
    <Router>
        <Switch>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <Route path="/" exact component={Home}/>
                    <Route path="/bio" component={Bio}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/courses" component={Courses}/>
                </header>
            </div>
        </Switch>
    </Router>
  );
}

export default App;


function Nav(){
    return (
        <div className="nav-bar">
            <Link to={"/"} style={{ textDecoration: 'none'}}>
                <h1>Caleb Patton</h1>
            </Link>
            <NavButton name="Bio" link = "bio"/>
            <NavButton name="Projects" link = "projects"/>
            <NavButton name="Resume" link = "resume"/>
            <NavButton name="Relevant Course Work" link = "courses"/>
        </div>
    );
}

function NavButton(props){
    return (
        <div className="nav-button">
            <Link to={'/' + props.link}  style={{ textDecoration: 'none' }}>
                <h2>{props.name}</h2>   
            </Link>
        </div>
    );
}





