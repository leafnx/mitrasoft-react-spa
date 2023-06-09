import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import Image from 'react-bootstrap/Image';
import style from './postsStyle.module.css'

import { getCommentsFetch } from "../comments/commentsSlice";
import Comments from "../comments/Comments";
import Pagination from "./Pagination";
import PostsHeader from "./PostsHeader";



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
          <Image src={avatarURL} alt='user avatar' className={style.avatar} rounded />
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
  const { posts, perPage } = props

  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [sort, setSort] = useState(null)

  const sortPosts = (postsToSort) => {
    if (sort === null) return postsToSort;

    return [...postsToSort].sort((postA, postB) => {
      if (sort === 'ascending') return postA.title.localeCompare(postB.title)
      if (sort === 'descending') return postB.title.localeCompare(postA.title)
    })
  }

  const changePage = (pageNumber) => {
    const totalPages = Math.ceil(posts.length / perPage)
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber)
  }

  const indexOfLastPost = currentPage * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  const filteredPosts = posts.filter(post => post.title.includes(searchQuery))
  const sortedPosts = sortPosts(filteredPosts)
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    changePage(1)
  }, [searchQuery])

  return(
    <div className={style.posts}>
      <PostsHeader setSearchQuery={setSearchQuery} sort={sort} setSort={setSort} />
      <div>
        {
          filteredPosts.length
            ? currentPosts.map(post => <Post key={post.id} post={post} />)
            : <p className="mt-5">No posts found</p>
        }
      </div>
      <Pagination
        currentPage={currentPage}
        postsPerPage={perPage}
        totalPosts={filteredPosts.length}
        changePage={changePage}
      />
    </div>
  )
}