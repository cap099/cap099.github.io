import {Container, Row, Image, Col} from 'react-bootstrap'
import headshot from './resources/headshot.jpg'
import About from './About.js'



function Home(){
    return (
        <div>
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
            
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <br></br>
                <br></br>

                <br></br>
                <br></br>

                <br></br>

                <div id = 'about-div'>
                <About/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </div>
                </div>
    );
}

export default Home;




