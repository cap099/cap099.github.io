import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Projects from './components/Projects.js'
import Home from './components/Home.js'
import Navigation from './components/Navigation.js';
import About from './components/About.js'

function App() {
  return (
    <Router>
        <Switch>
            <div className="App">
                    <Navigation/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
            </div>
        </Switch>
    </Router>
  );
}

export default App;
