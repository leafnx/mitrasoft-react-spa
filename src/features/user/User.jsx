import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import style from './userStyle.module.css'

import { selectUser, selectUserPosts } from "./userSlice"
import Posts from "../posts/Posts"
import GoBack from "../../components/GoBack"

const Subtitle = ({children}) => {
  return(
    <label className={style.subtitle}>{children}</label>
  )
}

function UserPosts() {
  const posts = useSelector(selectUserPosts)

  return(
    <Posts posts={posts} perPage={5} />
  )
}

function UserCard() {
  const user = useSelector(selectUser)
  const avatarURL = process.env.REACT_APP_USER_AVATAR_URL

  return(
    <Card border='dark' className={style.info + ' shadow'}>
      <Card.Body className={style.infoBody}>
        <Image src={avatarURL} alt='user avatar' className={style.avatar} rounded />
        <div>
          <Card.Title>{user.username}</Card.Title>
          <Card.Text>
            <Subtitle>Full name:</Subtitle>{user.name}
          </Card.Text>
          <Card.Text>
            <Subtitle>Email:</Subtitle>{user.email}
          </Card.Text>
          <Card.Text>
            <Subtitle>Website:</Subtitle>
            <Link target='_blank' className='text-decoration-none fst-italic'>{user.website}</Link>
          </Card.Text>

          <div>
            <Subtitle>Company:</Subtitle>
            <p className={style.companyName}>{user.company?.name}</p>
            <p className={style.companyDecspirtion}>{user.company?.catchPhrase}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default function User() {
  return(
    <>
      <UserCard />
      <UserPosts />
      <GoBack className={style.goBackBtn} />
    </>
  )
}