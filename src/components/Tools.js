import {Container, Row, Col} from 'react-bootstrap'


function Tools(){
    return (
        <div className='list-div'>
            <Container>
                <Row>
                    <Col>      
                        <h1>Programming Tools I've Used the Most:</h1>
                        <ul className='list-content'>
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>SystemVerilog</li>
                            <li>Anaconda</li>
                            <li>PyTorch</li>
                            <li>ROS</li>
                            <li>Webots</li>
                            <li>x86 Assembly</li>
                            <li>RISC-V Assembly</li>
                            <li>Github</li>
                        </ul>
                    </Col>      
                </Row>
            </Container>
        </div>
    );
}


export default Tools;