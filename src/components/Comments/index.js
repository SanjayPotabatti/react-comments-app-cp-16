import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    inputName: '',
    commentText: '',
  }

  onChangeComment = event => {
    this.setState({commentText: event.target.value})
  }

  onChangeName = event => {
    this.setState({inputName: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {inputName, commentText} = this.state
    const newComment = {
      id: uuidv4(),
      inputName,
      commentText,
      isLike: true,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      inputName: '',
      commentText: '',
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachItem => eachItem.id !== id),
    })
  }

  onLikeButtonPress = id => {
    const {commentsList} = this.state

    const newlist = commentsList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, isLike: !eachItem.isLike}
      }
      return eachItem
    })
    this.setState({commentsList: newlist})
  }

  render() {
    const {inputName, commentText, commentsList} = this.state

    return (
      <div className="mainContainer">
        <div className="bgContainer">
          <h1 className="heading">Comments</h1>
          <div className="imgcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="imgContainer"
            />
          </div>
          <form
            className="inputContainer d-flex flex-column align-items-start"
            onSubmit={this.onAddComment}
          >
            <p className="para">Say something about 4.0 technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              value={inputName}
              className="mb-2 inputText"
              onChange={this.onChangeName}
            />
            <textarea
              type="text"
              value={commentText}
              placeholder="Your Comment"
              className="mb-2 textareaStyle"
              onChange={this.onChangeComment}
            />
            <button type="submit" className="btn btn-primary">
              Add Comment
            </button>
          </form>
        </div>
        <hr />
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              commentsList={eachComment}
              deleteComment={this.deleteComment}
              onLikeButtonPress={this.onLikeButtonPress}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
