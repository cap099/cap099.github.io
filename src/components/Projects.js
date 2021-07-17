import data from './resources/projects/projects.json'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import './resources/styles/projects.css'


function Projects(){
    let route = useRouteMatch();

    return (
        <Switch>
            <Route exact path={route.path}>
            {/* <p>This page will contain descriptions of personal projects that I have worked on</p> */}
                <div className='grid-container'>
                    <div className='grid-item'>
                    <div className='temp'>
                    This page will contain descriptions of select personal projects that I have worked on  
        </div>
                        {/* <ProjectCard title = {data.project1.title} 
                                    subtitle = {data.project1.subtitle} 
                                    date = {data.project1.date}
                                    tools = {data.project1.tools}
                                    image = {data.project1.image}
                                    link = {data.project1.link}/>   */}
                               </div>
                </div>
            </Route>

            <Route path={`${route.path}/:articleName`}>
                <Article/>
            </Route>

        </Switch>
    );
}

export default Projects;

function Article(){
    let {articleName} = useParams();
    var __html = require('./resources/projects/' + articleName + '/' + articleName + '.html.js');
    var article = { __html: __html };

    return (
        <div>
            <span dangerouslySetInnerHTML={article} /> 
        </div>
    );
}


function ProjectCard(props){
    let route = useRouteMatch();
    const img = require('./resources/projects/' + props.link + '/img/' + props.image).default;

    return(
        <div className="card">
            <a href={route.url + '/' + props.link}>
                <img className="card-img-top" src={img} alt="card header" height="200px"/>
                <h4 className="card-title">{props.title}</h4>
            </a>
                <div className="card-body">
                    
                        <p className="card-text" >{props.subtitle}</p>
                        <p className="card-text"><small class="text-muted">{props.date}</small></p>

                    <div className="tool-tags">
                        <Tool name = 'React'/>
                        <Tool name = 'HTML'/>
                        <Tool name = 'CSS'/>
                    </div>
                    
                </div>  
            
        </div>
    );
}


function Tool(props){

    return (
        <div className = 'tool'>
            {props.name}
        </div>
    );
}