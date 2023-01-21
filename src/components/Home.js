import {Container, Row, Image, Col} from 'react-bootstrap'
import headshot from './resources/headshot.jpg'
import blockI from './resources/blockI.png'
import blockN from './resources/blockN.png'
import './styles/Home.css'


function Home(){
    return (
        <div className='body'>
        <div className='homepage'>
            <Container fluid>
                <Row xs={1} md={2} className='align-items-center'>
                    <Col>
                        <div className='image'>
                            <Image src={headshot} alt="headshot" roundedCircle/>
                        </div>
                    </Col>
                    <Col>
                        <div className='intro-title'>
                            <div className='hello'>
                                Hi, 
                            </div>
                            <div className='my-name-is'>
                                I'm Caleb.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2} className='align-items-center'>
                    <Col>
                        <div className='text-content'>
                            In May 2022 I graduated from the University of Illinois with a B.S. in Computer Engineering. During my 
                            time at UIUC, I explored my interest in Deep Learning and Computer Vision through my coursework and 
                            through internships with three different companies.
                        </div>
                    </Col>
                    <Col align='center'>
                        <div className='logo'>
                            <Image src={blockI} alt="uiucLogo" width={250}/>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2} className='align-items-center'>
                    <Col align='center'>
                        <div className='logo'>
                            <Image src={blockN} alt="unrLogo" width={500}/>
                        </div>
                    </Col>
                    <Col>
                        <div className='text-content'>
                            After graduation, I moved to Reno, Nevada to start an M.S. in Mechanical Engineering 
                            and to research Autonomous Vehicles in the Learning Autonomy 
                            and Control Systems Lab with Dr. Petros Voulgaris.
                        </div>   
                    </Col>
                </Row>
            </Container> 

        </div>
        </div>
    );
}

export default Home;




