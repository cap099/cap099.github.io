import projects from './resources/projects/project_info.js'
import {Card, Container, Row, Col} from 'react-bootstrap'
import {Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'

function Projects(){
    let route = useRouteMatch();

    return (
        <div>
        <Switch>
            <Route exact path={route.path}>
                <div className='project-header'>Some of my past projects:</div>
                    <div className='project-list'>
                    <Container>
                        <Row xl={4}>
                            {projects.map((project) => (<Col align='center'><ProjectCard    title = {project.title} 
                                                                        subtitle = {project.subtitle} 
                                                                        date = {project.date}
                                                                        tools = {project.tools}
                                                                        image = {project.image}
                                                                        link = {project.link}/></Col>))}
                        </Row>
                    </Container>
                </div>
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
    var article = require('./resources/projects/' + articleName + '/' + articleName + '.js').default;
    return (article);
}


function ProjectCard(props){
    let route = useRouteMatch();
    const img = require('./resources/projects/' + props.link + '/img/' + props.image).default;
    var tools = props.tools;
    var tool_string = "";
    for (var i = 0; i < tools.length; i++){
        if (i < tools.length -1){
            tool_string += (tools[i] + '+');
        } else {
            tool_string += tools[i];
        }   
    }
    return( 
        <Link className='project-link' to={route.url + '/' + props.link}>
            <Card className='project-card' >
                <Card.Img src={img}/>
                <Card.Body>
                <Card.Title>{(props.title).toUpperCase()}</Card.Title>
                <Card.Text>
                    <div>{props.date}</div>
                    <div>{tool_string}</div>
                </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}
