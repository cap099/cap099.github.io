import {Navbar, Nav, Container} from 'react-bootstrap';

function Navigation(){
    return (
            <Navbar  collaspeOnSelect fixed = 'sticky' expand = 'sm' bg='dark' variant = 'dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Brand href = '/'>Home</Navbar.Brand>
                    <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href = '/about'>About</Nav.Link>
                            <Nav.Link href = '/projects'>Projects</Nav.Link>
                            <Nav.Link href = '/resume'>Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
}




export default Navigation;



