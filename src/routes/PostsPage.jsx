import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPostsFetch, isPostsLoading, selectPosts } from "../features/posts/postsSlice";
import Posts from "../features/posts/Posts";
import Loader from "../components/Loader";



export default function PostsPage() {
  const posts = useSelector(selectPosts)
  const isLoading = useSelector(isPostsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsFetch())
  }, [])

  return(
    <div>
      {isLoading ? <Loader /> : <Posts posts={posts} perPage={10} />}
    </div>
  )
}