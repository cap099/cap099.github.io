import headshot from './resources/headshot.jpg'
// import blockI from './resources/Illinois_Block_I.png'
import {Image, Container, Row, Col} from 'react-bootstrap'

function Home(){
    return (
            <Container fluid>
            
                
            <div className="home">
            <Row>
            <Col lg={5}>
                <div className='intro'>
                    <h1 className='intro-heading'>Hi, I'm Caleb Patton</h1>
                    <div className='intro-subheading'>I like Data and Robots</div>
                    <div className='intro-paragraph'>
                                I currently work at Brunswick Corporation's iJet Laboratory as a CV/ML Intern. In May of 2022 I will graduate from the University of Illinois at Urbana-Champaign with a B.S. in Computer Engineering.
                        <br></br>
                        <br></br>
                    </div>   
                </div>     
                </Col>
                <Col lg={2}></Col>
                <Col lg={5}>
                <div className='headshot'> 
                    <Image src = {headshot} alt="headshot" width="500" height = "500" roundedCircle/>
                </div>
                </Col>
                </Row>
            </div> 
            
            </Container> 
    );
}

export default Home;