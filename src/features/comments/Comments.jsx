import { useSelector } from "react-redux"
import { isCommentsLoading, selectComments } from "./commentsSlice"
import style from './commentsSlyle.module.css'
import Loader from "../../components/Loader"

export default function Comments(props) {
  const { postId } = props
  const comments = useSelector(selectComments(postId))
  const isLoading = useSelector(isCommentsLoading(postId))

  if (isLoading) return(
    <div className={style.commentList}>
      <Loader />
    </div>
  )
  
  return(
    <div className={style.commentList}>
      {comments.map(comment => (
        <div key={comment.id} className={style.comment}>
          <h5 className={style.email}>{comment.email}</h5>
          <p className={style.body}>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}