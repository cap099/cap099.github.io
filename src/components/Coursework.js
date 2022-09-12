import {Container, Row, Col} from 'react-bootstrap'



function Coursework(){
    return (
        <div className='tools-div'>
            <Container fluid>
                <Row className='project-grid'>
                    <Col>
            <h1>Relevant Coursework at Illinois:</h1>
            <br></br>
            <div>
            <ul className='classList'>
                {/* <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://cap099.github.io/resume/finaltranscript.pdf'>My Final Transcript</a></li>
                <br></br> */}
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
            </div>
            </Col>
            {/* <Col>
            <h1>Things I'm Reading About Outside of School:</h1>
            <br></br>
            <div>
            <ul className='classList'>
                <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://ocw.mit.edu/courses/mathematics/18-650-statistics-for-applications-fall-2016/'>Statistical Modeling</a></li>
                <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://ocw.mit.edu/courses/aeronautics-and-astronautics/16-100-aerodynamics-fall-2005/'>Aerodynamics</a></li>
                <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://cs.illinois.edu/academics/courses/cs424'>Real Time Operating Systems</a></li>
                <li><a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'http://slazebni.cs.illinois.edu/spring22/'>Deep Learning for Computer Vision</a></li>
            </ul>
            </div>
            </Col> */}
            </Row>
            </Container>
        </div>
    );
}


export default Coursework;