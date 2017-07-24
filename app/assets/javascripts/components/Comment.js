import React, { Component } from 'react'
import classNames from 'classnames'

class Comment extends Component {
  constructor ({comment, currentUser, pictureComments}) {
    super()
    this.comment = comment
    this.currentUser = currentUser
    this.pictureComments = pictureComments
    this.state = this.setInitialState()
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

  setInitialState() {
    this.description = this.comment.description || '',
    this.user = this.comment.user || {},
    this.picture_id = this.comment.picture.id
  }

  render () {
    return (
      <div className="holjasd">
        <p> {this.description} </p>
      </div>
    )
  }

}
export default Comment
