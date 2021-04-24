import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarComponent = (props: any) => {
  return (
    <Navbar className="navbar navbar-expand-md fixed-top navbar-dark">
      <Navbar.Brand>
        <img
          className="img-fluid logo"
          src="http://streamlab.gentechtree.com/red-demo/wp-content/uploads/sites/2/2021/02/Logo-2.png"
          alt="streamlab"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} exact to="/">
            Landing
          </Nav.Link>

          <Nav.Link as={NavLink} exact to="/home">
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} exact to="/movies">
            Movies
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
