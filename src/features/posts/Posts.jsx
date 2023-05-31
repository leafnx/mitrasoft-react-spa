import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"

import { getPostsFetch, selectPosts } from "./postsSlice"
import { getCommentsFetch } from "../comments/commentsSlice";
import Comments from "../comments/Comments";
import style from './postsStyle.module.css'

export function Post(props) {
  const { post } = props
  const dispatch = useDispatch()

  const [isCommentsOpen, setCommentsOpen] = useState(false)

  const avatarURL = process.env.REACT_APP_USER_AVATAR_URL

  const toggleComments = (postId) => {
    if (!isCommentsOpen) dispatch(getCommentsFetch(postId))
    setCommentsOpen(prev => !prev)
  }

  return(
    <Card className={style.post}>
      <div className={style.postBody}>
        <Link to={`/user/${post.userId}`}>
          <img src={avatarURL} alt='user avatar' className={style.avatar} />
        </Link>
        <div>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button onClick={() => toggleComments(post.id)}>Comments</Button>
        </div>
      </div>
      { isCommentsOpen ? <Comments postId={post.id} /> : null }
    </Card>
  )
}

export default function Posts() {
  const posts = useSelector(selectPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsFetch())
  }, [])

  return(
    <div className={style.posts}>
      {posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  )
}