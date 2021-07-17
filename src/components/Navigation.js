import {Image , Navbar, Nav, Container} from 'react-bootstrap';
import headshot from './resources/headshot.jpg'


function Navigation(){
    return (
            <Navbar  collaspeOnSelect sticky="top" expand = 'sm' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Brand bsPrefix ='logo' href = '/'>Home <Image src = {headshot} alt="headshot" width="80" height = "80" roundedCircle/></Navbar.Brand>
                    <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link bsPrefix = 'custom-link' href = '/about'>About</Nav.Link>
                            <Nav.Link bsPrefix = 'custom-link' href = '/projects'>Projects</Nav.Link>
                            <Nav.Link bsPrefix = 'custom-link' href = '/resume'>Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
}




export default Navigation;



