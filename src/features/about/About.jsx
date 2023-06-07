import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import style from './aboutStyle.module.css'

import { selectAbout } from './aboutSlice'
import { Col, Row } from 'react-bootstrap'


export default function About() {
  const about = useSelector(selectAbout)
  
  return(
    <Card className='mt-5 shadow'>
      <Card.Body className='text-start d-flex gap-4'>
        <Image src={about.avatar_url} alt='avatar' className={style.avatar} rounded />
        <div className='d-flex flex-column my-2'>
          <Card.Title className='fs-3 mb-4 fw-bold'>{about.full_name}</Card.Title>

          <Card.Text className='fw-bold fst-italic text-muted mb-4'>{about.short_description}</Card.Text>

          <Container className='mt-auto'>
            <Row>
              <Col>
                <Card.Subtitle className='mb-2'>Ссылки</Card.Subtitle>
                {about.links?.map(link => (
                  <Card.Link key={link.url} as={Link} to={link.url} target='_blank'>{link.name}</Card.Link>
                ))}
              </Col>

              <Col>
                <Card.Subtitle className='mb-2'>Email:</Card.Subtitle>
                <Card.Text className='fst-italic text-muted'>{about.email}</Card.Text>
              </Col>
            </Row>
          </Container>
        </div>
      </Card.Body>
      <Card.Body className='text-start p-4 border-top'>     
        <Card.Title className='fs-4 mb-4 fw-bold'>Обо мне</Card.Title>
        <Card.Text className='fs-5 text-muted' style={{whiteSpace: 'pre-line'}}>
          {about.full_description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}