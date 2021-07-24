import {Container, Row, Col} from 'react-bootstrap'

function Home(){
    return (
            <Container fluid>
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




