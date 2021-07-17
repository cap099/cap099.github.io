import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Home from './components/Home.js'
import Resume from './components/Resume.js'
import Navigation from './components/Navigation.js';


function App() {
  return (
    <Router>
        <Switch>
            <div className="App">
                <header>
                    <Navigation/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/resume" component={Resume}/>
                </header>
            </div>
        </Switch>
    </Router>
  );
}

export default App;
