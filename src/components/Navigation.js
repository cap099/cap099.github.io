import {Image , Navbar, Nav, Container} from 'react-bootstrap';
import headshot from './resources/headshot.jpg';
import {Link} from 'react-router-dom';


function Navigation(){
    return (
            <Navbar  collaspeOnSelect expand = 'sm' variant='dark'>
                <Container fluid>
                    <Navbar.Brand bsPrefix ='logo' href = '/'><Image src = {headshot} alt="headshot" width="80" height = "80" roundedCircle/> Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
                        <Nav>
                            <Link className = 'custom-link' to = {'/about'}>About</Link>
                            <Link className = 'custom-link' to = {'/projects'}>Projects</Link>
                            <a className = 'custom-link' target = '_blank' rel="noreferrer" href = 'https://drive.google.com/file/d/1vm6DLQO7uN-cc72WMLmi1DhuLg1r36q0/view?usp=sharing'>Resume</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
}

export default Navigation;



