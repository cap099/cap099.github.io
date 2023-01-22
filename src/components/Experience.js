import {Container, Tab, Row, Col, Nav, Image} from "react-bootstrap";
import brunswick_logo from './resources/brunswickLogo.jpg';
import blockN from './resources/unrLogoSquare.jpg';
import blockI from './resources/illinoisLogoSquare.jpg';
import altamont_logo from './resources/altamontLogo.jpg';
import xaptum_logo from './resources/xaptumLogo.jpg';




function Experience() {
  return (
    <div className='experience-page'>
        <div>
            <Container>
                <Row xs={1} md={2} className='align-items-center'>
                    <Col>
                        <Image src={blockN}/>
                        <div>Graduate Research Assistant</div>
                    </Col>
                    <Col>
                        <div className="experience-content">
                            Working on Carla Simulations for Autonomous Driving and VTOL Aircraft in the Learning Autonomy and Control Systems Lab
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2} className='align-items-center'>
                    <Col>
                        <Image src={brunswick_logo}/>
                        <div>Computer Vision/Machine Learning Intern</div>
                    </Col>
                    <Col>
                        <div className="experience-content">
                        Researched and prototyped Deep Learning and Classical Computer Vision applications 
                        for recreational boating.  This included different methods of data generation and 
                        object detection in a marine environment, as well as model training and some data collection.
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2} className='align-items-center'>
                    <Col>
                        <Image src={xaptum_logo}/>
                        <div>Software Engineering Intern</div>
                    </Col>
                    <Col>
                        <div className="experience-content">
                            Experimented with Machine Learning algorithms to detect anomalous connections on Xaptum's IoT network 
                            using Classical Machine Learning Algorithms like Logistic Regression and Isolation Forest.
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2} className='align-items-center'>
                    <Col>
                        <Image src={blockI}/>
                        <div>OpenLab Monitor</div>
                    </Col>
                    <Col>
                        <div className="experience-content">
                        Managed and operated power tools, multiple 3D printers, Epson Laser Cutters and other tools in the Illinois ECE OpenLab.
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2} className='align-items-center'>
                    <Col>
                        <Image src={altamont_logo}/>
                        <div>Software Engineering Intern</div>
                    </Col>
                    <Col>
                        <div className="experience-content">
                            Contributed to numerous software projects using Python and Deep Learning using PyTorch and Fast.ai.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


      </div>
   
  );
}

export default Experience;
