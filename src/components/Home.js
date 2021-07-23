import headshot from './resources/headshot.jpg'
import {Image, Container, Row, Col} from 'react-bootstrap'

function Home(){
    return (
            <Container fluid>
                {/* <div className="home"> */}
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
                                        I currently work at Brunswick Corporation's iJet Laboratory as a CV/ML Intern. In May of 2022 I will graduate from the University of Illinois at Urbana-Champaign with a B.S. in Computer Engineering.  
                                <br></br>
                                <br></br>
                                This website is still under construction.
                            </div>   
                        </div>     
                    </Col>
                </Row>
            {/* </div>  */}
            </Container> 
    );
}

export default Home;




