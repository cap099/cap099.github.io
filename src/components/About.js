import {Accordion, Card, Button, Tab, Row, Col, Nav, Image} from "react-bootstrap";
import ijet_logo from './resources/ijet_logo.png';
import altamont_logo from './resources/altamont_logo.webp';
import xaptum_logo from './resources/xaptum_logo.png';
import python_logo from './resources/python_logo.png'
import headshot from './resources/headshot.jpg'




function About() {
  return (
    <div className='about-div'>

<Row>
                    <Col lg={12} align='center'>
                        <div className='headshot'> 
                            <Image src = {headshot} alt="headshot" width="450" height = "450" roundedCircle/>
                        </div>
                    </Col>
                </Row>
            <div className='bio'>
                <p>
                    Hello! My name is Caleb and I'm currently a senior in Computer Engineering at the University of Illinois at Urbana-Champaign.  
                    My main interests are Robotics and Data Science however I enjoy all kinds of software development. 
                </p>
                <p>
                    I have interned at several tech companies over the past few years.  Currently, I work at Brunswick Corporation's iJet Laboratory as a 
                    Computer Vision/Machine Learning Intern applying my knowledge of Artificial Intelligence to assist in the construction of iJet's 
                    Computer Vision Pipeline.
                </p>
                <p>
                    When I am not working I can often be found  running, biking, cheering for the Saint Louis Cardinals or playing one of my saxophones.
                </p>
            </div>

      <div className = 'experience'>
      <Tab.Container   defaultActiveKey="first">
        <Row>
            <Col sm={3}>
            <Nav className="flex-column">
                <Nav.Item>
                <Nav.Link className = 'tab' bsPrefix='experience-tab' eventKey="first">Brunswick iJet</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className = 'tab' bsPrefix='experience-tab' eventKey="second">Xaptum Inc.</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link  className = 'tab' bsPrefix='experience-tab' eventKey="third">Altamont Co.</Nav.Link>
                </Nav.Item>


            </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                <Image className='experience-logo' src={ijet_logo} />
                <div className = 'title'>Champaign Illinois - Robotics/CVML Intern</div>
                <div className ='title'>February 2021 - Present</div>
                <div className = 'contributions'>
                <ul>
                    <li>Assisted with the development of a CV/ML Pipeline for Autonomous Boating including researching methods of data collection, data labeling and model selection</li>
                    <li>Trained models for multiple object detection methods including Bounding Box Regression and Image Segmentation</li>
                </ul>
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Image className='experience-logo' src={xaptum_logo}/>
                <div className = 'title'>Chicago Illinois - Software Engineering/Machine Learning Intern</div>
                <div className ='title'>January 2020 - August 2020</div>
                <div className = 'contributions'>
                <ul>
                    <li>Prototyped an Anomaly Detection/Notifiction system using Machine Learning and Erlang</li>
                    <li>Created Data Visualizations of to show durations of anamalous connection events</li>
                    <li>Used rebar3 to build a REST API to initialize IoT Devices on Xaptum's Network</li>
                </ul>
                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Image className='experience-logo' src={altamont_logo}/>
                <div className = 'title'>Machine Learning Developer</div>
                <div className ='title'>Summer 2018, Summer 2019, Summer 2020</div>
                <div className = 'contributions'>
                <ul>
                    <li>Used fast.ai to train a Deep Network to classify images of products</li>
                    <li>Contributed to the development of a static site generator using Python, Flask and SQLALchemy</li>
                    <li>Implemented new production tracking system on industrial CNC Machines</li>
                </ul>
                </div>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
    </div>
    <br></br>
    <br></br>

    <br></br>

    <br></br>
    <br></br>

    <br></br>

    <br></br>


    <Accordion defaultActiveKey="0">
        <Card className = 'about-card'>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="text" eventKey="0">
              Programming Languages Libraries and Tools
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body><Image src={python_logo}/></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className = 'about-card'>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="text" eventKey="1">
              <h1>Design Software</h1>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>body 2</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className = 'about-card'>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="text" eventKey="2">
              Manufacturing Technologies
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>laser</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>


      </div>
   
  );
}

export default About;





/*
Programming Languages
Data Science Tools
Manufacturing Technologies

BIO

Where Ive worked




*/