import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


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



function Home(){
    return (
        <div>
            <h1>Home</h1> 
        </div>
    );
}


function Bio(){
    return (
        <div>
            <h1>Bio</h1> 
        </div>
    );
}

function Projects(){
    return (
        <div>
            <h1>Projects</h1> 
        </div>
    );
}

function Resume(){
    return (
        <div>
            <h1>Resume</h1> 
        </div>
    );
}
