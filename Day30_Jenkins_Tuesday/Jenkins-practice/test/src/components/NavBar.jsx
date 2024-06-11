import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About Me</Nav.Link>
                <NavDropdown title="To Do App" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Add To Do</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">View To Dos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Update To Dos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/todo">Go to the To Do App</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/noidea">NO IDEA</Nav.Link>
                <Nav.Link eventKey={2} href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default NavBar;