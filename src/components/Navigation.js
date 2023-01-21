import {Image , Navbar, Nav, Container} from 'react-bootstrap';
import headshot from './resources/headshot.jpg';
import {Link} from 'react-router-dom';


function Navigation(){
    return (
        <div className='nav-bar'>
            <Navbar  collaspeOnSelect expand = 'sm' variant='dark'>
                <Container fluid>
                    <Navbar.Brand href = '/'><div className='brand'>Home</div></Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
                        <Nav>
                            <Link className='navbar-link' to = {'/about'}>About</Link>
                            <Link className='navbar-link' to = {'/projects'}>Projects</Link>
                            <Link className='navbar-link' to = {'/coursework'}>Coursework</Link>
                            <Link className='navbar-link' to = {'/tools'}>Tools</Link>
                            <a className = 'navbar-link' target = '_blank' rel="noreferrer" href = 'https://cap099.github.io/resume/resume.pdf'>Resume</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        );
}

export default Navigation;



