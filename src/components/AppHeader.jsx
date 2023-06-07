import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import { selectAbout } from '../features/about/aboutSlice';

function AboutMe() {
  const about = useSelector(selectAbout)

  return(
    <Card className='d-inline-flex mb-2' style={{minWidth: '300px'}}>
      <Card.Body className='text-start d-flex gap-2 p-2'>
        <Image src={about.avatar_url} alt='avatar' rounded style={{width: '50px', height: '50px'}} />
        <div className='d-flex flex-column'>
          <Card.Text className='fw-bold m-0'>{about.full_name}</Card.Text>
          <Card.Text className='fst-italic text-muted'>{about.email}</Card.Text>
        </div>
      </Card.Body>
    </Card>
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
          <Navbar.Brand role='button' className='d-flex flex-grow-1' onClick={toggle}>React Redux App</Navbar.Brand>
          <Navbar.Toggle onClick={toggle} />
          <Navbar.Collapse>
            <hr />
            <AboutMe />
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" onClick={toggle}>All posts</Nav.Link>
              <Nav.Link as={Link} to='about' onClick={toggle}>About me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}