import {Container, Row, Col} from 'react-bootstrap'



function Coursework(){
    return (
        <div className='tools-div'>
            <Container>
                <Row>
                    <Col>
                        <h1>Relevant Coursework at Illinois:</h1>
                        <ul className='classList'>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://ece.illinois.edu/academics/courses/ece449'>Machine Learning Theory</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://cs.illinois.edu/academics/courses/cs441'>Applied Machine Learning</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://math.illinois.edu/resources/department-resources/syllabus-math-415'>Linear Algebra</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://ece.illinois.edu/academics/courses/ece313'>Probability</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://ece.illinois.edu/academics/courses/ece470'>Intro to Robotics</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'http://daslab.illinois.edu/coursesfall2021.html'>Mobile Robotics</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://ece.illinois.edu/academics/courses/ece391'>Computer Systems Engineering</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://ece.illinois.edu/academics/courses/ece385'>Digital Systems Lab</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://ece.illinois.edu/academics/courses/ece310'>Digital Signal Processing</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://ece.illinois.edu/academics/courses/ece374'>Algorithms</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://courses.engr.illinois.edu/cs225/sp2022/'>Data Structures</a></li>
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://ece.illinois.edu/academics/courses/ece411'>Computer Organization and Design</a></li>                
                            <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://courses.illinois.edu/schedule/2021/fall/AE/140'>Computer Aided Design</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Coursework;