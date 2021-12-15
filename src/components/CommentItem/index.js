// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentsList, deleteComment, onLikeButtonPress} = props
  const {id, inputName, commentText, isLike} = commentsList

  const onDelete = () => {
    deleteComment(id)
  }
  const onLiked = () => {
    onLikeButtonPress(id)
  }
  const imgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  return (
    <li>
      <div>
        <div className="nameLogo">{inputName[0]}</div>
        <h1>{inputName}</h1>
        <p>{formatDistanceToNow(new Date())}</p>
      </div>
      <p>{commentText}</p>
      <div>
        <img src={imgUrl} alt="like" onClick={onLiked} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}

export default CommentItem
