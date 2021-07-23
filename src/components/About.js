import {Accordion, Card, Button, Tab, Row, Col, Nav} from "react-bootstrap";


function About() {
  return (
    <div className='about-div'>

                Hello! My name is Caleb, and introintorintrointrointorintrointrointorintrointrointorintrointrointorintrointrointorintrointrointorintrointrointorintro
               I currently work at Brunswick Corporation's iJet Laboratory as a CV/ML Intern. In May of 2022 I will graduate from the University of Illinois at Urbana-Champaign with a B.S. in Computer Engineering.  
      <Accordion defaultActiveKey="0">
        <Card className = 'about-card'>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              title 1
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>python go rust c c++ etc</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className = 'about-card'>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              title 2
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>body 2</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>


      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          text1
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          text2
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>




      </div>
   
  );
}

export default About;





/*
Programming Languages
Data Science Tools
Manufacturing Technologies

BIO

Where Ive worked




*/