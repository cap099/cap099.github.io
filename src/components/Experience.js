import {Container, Tab, Row, Col, Nav, Image} from "react-bootstrap";
import ijet_logo from './resources/ijet_logo.png';
import altamont_logo from './resources/altamont_logo.webp';
import xaptum_logo from './resources/xaptum_logo.png';




function Experience() {
  return (
    <div className='about-page'>
        <Container className = 'about-container' fluid>

            <Row>
                <Col lg={12} align='center'>

        
                <div className = 'experience'>
                    <div className = 'experience-title'>Experience:</div>
                    <div>
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
                <div className ='title'>February 2021 - December 2021</div>
                <div className = 'contributions'>
                <ul>
                    <li> Developed 2 perception systems for an autonomous watercraft to detect swimmers, boats, docks and other obstacles using FasterRCNN and YOLOv5 and MaskRCNN in at 30 fps and 10 fps respectively</li>
                    <li>Optimized performance of C++ code for scientific computing using the CGAL library to support autonomous boating simulations</li>
                    <li>Researched methods to utilize and generate synthetic data to improve performance of DNNs using Unreal Engine by varying time of day, weather conditions and object generation</li>
                    <li>Led team of 15 interns in marine RGB and IR image data collection and subsequent obstacle labeling processes using dSpace Autera and Microsoft Azure</li>
                    <li>Reported initial findings of research into use of GANs to generate synthetic marine image data to supervisor</li>
                    <li>Ran mapping algorithms on mobile robotic platforms using LiDAR Sensors and Raspberry Pi Cameras</li>
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
                    <li>Detected anomalous connection events using Isolation Forest and Logistic Regression algorithms</li>
                    <li>Created Data Visualizations of to show durations of anamalous connection events</li>
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
                    <li>Contributed to the development of a static site generator using Python, Flask and Docker</li>
                    <li>Implemented new production tracking system on industrial CNC Machines</li>
                    <li>Contributed to a REST API to initialize thousands of IoT Devices on Xaptum's Network using rebar3</li>
                </ul>
                </div>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
    <br></br>
    <br></br>
    </div>
    </div>
                </Col>
            </Row>


        </Container>


      </div>
   
  );
}

export default Experience;





/*
Programming Languages
Data Science Tools
Manufacturing Technologies

BIO

Where Ive worked




*/