import linkedin from './resources/linkedin.png'
import data from '../projects/projects.json'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'




function Projects(){
let {path, url} = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <div className='grid-container'>
                    <div className='grid-item'>
                        <ProjectCard title = {data.article1.title} subtitle = {data.article1.subtitle} link = {url + '/' + data.article1.link}/>  

                    </div>

                    <div className='grid-item'>
                        <ProjectCard title = {data.article2.title} subtitle = {data.article2.subtitle} link = {url + '/' + data.article2.link}/>  
                    </div>

                </div>
            </Route>

            <Route path={`${path}/:articleName`}>
                <Article/>
            </Route>

        </Switch>
    );
}

export default Projects;

function Article(props){
    let {articleName} = useParams();

    var __html = require('../projects/' + articleName + '.html.js');
    var article = { __html: __html };

    return (
        <div>
            <h3>{articleName}</h3>
            <h3>{props.text}</h3>
            <span dangerouslySetInnerHTML={article} /> 

            

        </div>
    );

}


function ProjectCard(props){
    return(
        <div className="card">
    <a href={props.link}>
        <img className="card-img-top" src={linkedin} alt="Card cap" height="200px"/>
            <div className="card-body">
                <h5 className="card-title" id="card-title">{props.title}</h5>
                    <p className="card-text" id="card-subtitle">{props.subtitle}</p>
                        <p className="card-text" id="card-date"><small class="text-muted">{props.data}</small></p>
            </div>
    </a>
</div>

    );
}
