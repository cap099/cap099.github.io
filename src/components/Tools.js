import {Container, Row, Col} from 'react-bootstrap'


function Tools(){
    return (
        <div className='tools-div'>
            <Container fluid>
                <Row className='project-grid'>
                    <Col>      
            <h1>My Favorite Programming Tools:</h1>
            <br></br>
            <div>
            <ul className='toolsList'>
                <li>Python</li>
                <li>C/C++</li>
                <li>SystemVerilog</li>
                <li>Anaconda</li>
                <li>PyTorch</li>
                <li>ROS</li>
                <li>Webots</li>
                <li>Gazebo</li>
                <li>x86 Assembly</li>
                <li>RISC-V Assembly</li>
                <li>Github</li>
            </ul>
            </div>
            </Col>      
            <Col>
            <h1>Tools I'm currently learning:</h1>
            <br></br>
            <div>
            <ul className='toolsList'>
                <li>Rust</li>
                <li>Golang</li>
                <li>TensorFlow</li>
                <li>Stan</li>


            </ul>
            </div>
            </Col>      
            </Row>
            </Container>
        </div>
    );
}


export default Tools;