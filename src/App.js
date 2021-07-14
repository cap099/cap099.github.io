import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Home from './components/Home.js'
import Resume from './components/Resume.js'
import Courses from './components/Courses.js'
import Nav from './components/Nav.js';


function App() {
  return (
    <Router>
        <Switch>
            <div className="App">
                <header>
                    <Nav/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
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
