import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function UserCardSmall() {
  return(
    <div>
      user data
    </div>
  )
}

export default function AppHeader() {
  const location = useLocation()

  const [expanded, setExpanded] = useState(false)
  const toggle = () => setExpanded(prev => !prev)

  useEffect(() => {
    setExpanded(false)
  }, [location.pathname])

  return(
    <Container>
      <Navbar
        expand='false'
        expanded={expanded}
        className='m-3 bg-light rounded shadow border'
      >
        <Container>
          <Navbar.Brand role='button' onClick={toggle}>React Redux App</Navbar.Brand>
          <Navbar.Toggle onClick={toggle} />
          <Navbar.Collapse>
            <hr />
            <UserCardSmall />
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" onClick={toggle}>All posts</Nav.Link>
              <Nav.Link as={Link} to='me' onClick={toggle}>About me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}