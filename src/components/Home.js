import {Container, Row, Image, Col} from 'react-bootstrap'
import headshot from './resources/headshot.jpg'


function Home(){
    return (
            <Container fluid>
                <Row>
                    <Col lg={12} align='center'>
                        <div className='headshot'> 
                            <Image src = {headshot} alt="headshot" width="450" height = "450" roundedCircle/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className='intro'>
                            <h1 className='intro-heading'>Hi, I'm Caleb Patton</h1>
                            <div className='intro-subheading'>I like Data and Robots</div>
                            <div className='intro-paragraph'>
                            </div>   
                        </div>     
                    </Col>
                </Row>
            </Container> 
    );
}

export default Home;




