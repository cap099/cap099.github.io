import data from './resources/projects/projects.json'
import projects from './resources/projects/projects.js'
import './resources/styles/projects.css'
import {Card, Button, Container, Row} from 'react-bootstrap'
import {Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'




  {/* <div className='temp'>
                    This page will contain descriptions of select personal projects that I have worked on  
        </div> */}


function Projects(){
    let route = useRouteMatch();

    return (
        <div>
        <h3 className='project-header'>Ask me about my other projects!</h3>
        <Switch>
            <Route exact path={route.path}>
                    <Container fluid >
                        <Row className='project-grid'>
                            {projects.map(
                                (project) => (
                                    <ProjectCard 
                                    title = {project.title} 
                                    subtitle = {project.subtitle} 
                                    date = {project.date}
                                    tools = {project.tools}
                                    image = {project.image}
                                    link = {project.link}/>  ))}
                        </Row>
                    </Container>
            </Route>

            <Route path={`${route.path}/:articleName`}>
                <Article/>
            </Route>

        </Switch>
        </div>
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
    var tools = props.tools;
    var tool_string = "";
    for (var i = 0; i < tools.length; i++){
        if (i < tools.length -1){
            tool_string += (tools[i] + ' | ');
        } else {
            tool_string += tools[i];
        }   
    }
    console.log(tool_string);
    return( 
        <Link className='project-link' to={route.url + '/' + props.link}>
            <Card className='project-card' >
                    <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{(props.title).toUpperCase()}</Card.Title>
                    <Card.Text>
                    {props.subtitle} || {props.date}
                    <br></br>
                    <br></br>
                    {tool_string}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>

    )
}
