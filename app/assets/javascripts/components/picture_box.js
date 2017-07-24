import React, { Component } from 'react'
import Comment from './Comment.js'
import classNames from 'classnames'

class PictureBox extends Component {
  constructor ({picture, currentUser}) {
    super()
    console.log("picture")
    console.log(picture)
    console.log("user")
    console.log(currentUser)
    this.picture = picture
    this.currentUser = currentUser
    this.state = this.setInitialState()
  }

  setInitialState() {
    return {
    }
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    this.setState({
      [name] : {
        value: value
      }
    })
  }

  handleCommentSubmit(event) {
    event.preventDefault()
  }

  render () {
    const pictureComments = this.picture.comments.map((cm) => {
      return <Comment comment={cm} currentUser={this.currentUser} pictureComments={this.handleCommentSubmit}/>
    })

    return (
      <div className="class">
        <img className="asdsad" src={this.state}/>
        { pictureComments }
      </div>
    )
  }

}
export default PictureBox
