import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

import Card from 'react-bootstrap/Card'
import style from './userStyle.module.css'

import { getUserFetch, selectUser, selectUserPosts } from "./userSlice"
import { Post } from "../posts/Posts"

const Subtitle = ({children}) => {
  return(
    <label className={style.subtitle}>{children}</label>
  )
}

export default function User() {
  const { userId } = useParams()

  const user = useSelector(selectUser)
  const posts = useSelector(selectUserPosts)
  const avatarURL = process.env.REACT_APP_USER_AVATAR_URL

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserFetch(userId))
  }, [])

  return(
    <div className={style.main}>
      <Card border='dark' className={style.info}>
        <Card.Body className={style.infoBody}>
          <img src={avatarURL} alt='user avatar' className={style.avatar} />
          <div>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>
              <Subtitle>Full name:</Subtitle>{user.name}
            </Card.Text>
            <Card.Text>
              <Subtitle>Email:</Subtitle>{user.email}
            </Card.Text>
            <Card.Text>
              <Subtitle>Website:</Subtitle><Link target='_blank' className='text-decoration-none fst-italic'>{user.website}</Link>
            </Card.Text>

            <div>
              <Subtitle>Company:</Subtitle>
              <p className={style.companyName}>{user.company?.name}</p>
              <p className={style.companyDecspirtion}>{user.company?.catchPhrase}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className={style.posts}>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  )
}