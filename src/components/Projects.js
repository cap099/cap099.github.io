import linkedin from './resources/linkedin.png'
import data from '../articles/article1.json'
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

                    <div className='grid-item'>
                        <ProjectCard title = {data.title} subtitle = {data.subtitle}/>  
                    </div>
                </div>
            </Route>

            <Route path={`${path}/:articleName`}>
                <Article text={data.article2.text}/>
            </Route>

            


        </Switch>
    );
}

export default Projects;

function Article(props){
    let {articleName} = useParams();

    return (
        <div>
            <h3>{articleName}</h3>
            <h3>{props.text}</h3>
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
                        <p className="card-text" id="card-date"><small class="text-muted">Jul 12th, 2021</small></p>
            </div>
    </a>
</div>

    );
}
