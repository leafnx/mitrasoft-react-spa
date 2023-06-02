import { useDispatch } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import style from './postsStyle.module.css'

import { getCommentsFetch } from "../comments/commentsSlice";
import Comments from "../comments/Comments";
import Pagination from "./Pagination";

function Post(props) {
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

export default function Posts(props) {
  const { posts, perPage, loading } = props

  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastPost = currentPage * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const changePage = (pageNumber) => {
    const totalPages = Math.ceil(posts.length / perPage)
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber)
  }

  return(
    <div className={style.posts}>
      <div>
        {currentPosts.map(post => <Post key={post.id} post={post} />)}
      </div>
      <Pagination
        currentPage={currentPage}
        postsPerPage={perPage}
        totalPosts={posts.length}
        changePage={changePage}
      />
    </div>
  )
}

// 46-52 вынести в слайс