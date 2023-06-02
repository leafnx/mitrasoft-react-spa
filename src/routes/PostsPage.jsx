import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getPostsFetch, selectPosts } from "../features/posts/postsSlice";
import Posts from "../features/posts/Posts";

export default function PostsPage() {
  const posts = useSelector(selectPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsFetch())
  }, [])

  return(
    <div>
      <Posts posts={posts} perPage={10} />
    </div>
  )
}