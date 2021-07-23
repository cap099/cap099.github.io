import {Accordion, Card, Button, Tab, Row, Col, Nav, Image} from "react-bootstrap";
import ijet_logo from './resources/ijet_logo.jpg';
import altamont_logo from './resources/altamont_logo.jpg';
import xaptum_logo from './resources/xaptum_logo.png';



function About() {
  return (
    <div className='about-div'>

                Hello! My name is Caleb, and introintorintrointrointorintrointrointorintrointrointorintrointrointorintrointrointorintrointrointorintrointrointorintro
               I currently work at Brunswick Corporation's iJet Laboratory as a CV/ML Intern. In May of 2022 I will graduate from the University of Illinois at Urbana-Champaign with a B.S. in Computer Engineering.  
      <Accordion defaultActiveKey="0">
        <Card className = 'about-card'>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Programming Languages Libraries and Tools
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>python go rust c c++ react js</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className = 'about-card'>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Design Software
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>body 2</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className = 'about-card'>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Manufacturing Technologies
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>laser</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>


      <Tab.Container  defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Brunswick iJet<Image src={ijet_logo}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Xaptum Inc.<Image src={xaptum_logo}/></Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="third">Altamont Co.<Image src={altamont_logo}/></Nav.Link>
        </Nav.Item>


      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <div>Champaign Illinois - Robotics/CVML Intern</div>
        <div>February 2021 - Present</div>
          <ul>
              <li>Assisted with the development of a CV/ML Pipeline for Autonomous Boating including researching methods of data collection, data labeling and model selection</li>
              <li>Trained models for multiple object detection methods including Bounding Box Regression and Image Segmentation</li>
          </ul>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div>Chicago Illinois - Software Engineering/Machine Learning Intern</div>
        <div>January 2020 - August 2020</div>
          <ul>
              <li>Prototyped an Anomaly Detection/Notifiction system using Machine Learning and Erlang</li>
              <li>Created Data Visualizations of to show durations of anamalous connection events</li>
              <li>Used rebar3 to build a REST API to initialize IoT Devices on Xaptum's Network</li>
          </ul>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <div>Machine Learning Developer</div>
          <div>Summer 2018, Summer 2019, Summer 2020</div>
          <ul>
              <li>Used fast.ai to train a Deep Network to classify images of products</li>
              <li>Contributed to the development of a static site generator using Python, Flask and SQLALchemy</li>
              <li>Implemented new production tracking system on industrial CNC Machines</li>
          </ul>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>




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