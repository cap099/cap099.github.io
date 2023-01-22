import projects from './resources/projects/project_info.js'
import {Card, Container, Row, Col} from 'react-bootstrap'

function Projects(){
    return (
        <div>
            <div className='project-header'>
                Some of my past projects:
            </div>
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
        </div>
    );
}

export default Projects;


function ProjectCard(props){
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
    )
}
