import React, { Component } from 'react'
import classNames from 'classnames'

class Comment extends Component {
  constructor ({comment}) {
    super()
    console.log("comment")
    console.log(comment)
    this.comment = comment
    this.state = this.setInitialState()
    console.log(this.state)
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
    return {
      description: this.comment.description || '',
      user: this.comment.user || {},
      picture_id: this.comment.picture_id
    }
  }

  render () {
    return(
      <div className="holjasd">
        <p> {this.comment.description} </p>
      </div>
    )
  }

}
export default Comment
