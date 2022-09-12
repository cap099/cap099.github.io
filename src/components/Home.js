import {Container, Row, Image, Col} from 'react-bootstrap'
import headshot from './resources/headshot.jpg'



function Home(){
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col lg={12} align='center'>
                        <div className='headshot'> 
                            <Image src = {headshot} alt="headshot" width="350" height = "350" roundedCircle/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className='intro'>
                            <h1 className='intro-heading'>Hi, I'm Caleb Patton</h1>
                            <div>
                                <p className='intro-paragraph'> ECE@Illinois Computer Engineering Graduate</p>
                                <p className='intro-paragraph'>
                                    I am currently looking for full time Software Engineering roles, 
                                    particularly ones in the field of Perception, Robotics, or Computer Vision.
                                    I am open to In-office, Hybrid and Remote roles.
                                </p>
                                <p className='intro-paragraph'>  
                                    Contact Me: calebpatton09@gmail.com
                                </p>
                            </div>   
                        </div>     
                    </Col>
                </Row>
            </Container> 

                </div>
    );
}

export default Home;




