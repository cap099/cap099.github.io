import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Projects from './components/Projects.js'
import Home from './components/Home.js'
import Navigation from './components/Navigation.js';
import About from './components/About.js'
import Coursework from './components/Coursework';
import Tools from './components/Tools';

function App() {
  return (
    <Router>
        <Switch>
            <div className="App">
                    <Navigation/>
                <div className='body'>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/coursework" component={Coursework}/>
                    <Route path="/tools" component={Tools}/>
                </div>
            </div>
        </Switch>
    </Router>
  );
}

export default App;
