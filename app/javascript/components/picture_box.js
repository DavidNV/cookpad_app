import React, { Component } from 'react'
import classNames from 'classnames'
import validatejs from 'validate.js'

const INPUT_REGEX = /\[(\w+)\]/

class PictureBox extends Component {
  constructor ({picture, currentUser}) {
    super()
    this.picture = picture
    this.currentUser = currentUser
    this.state = this.setInitialState()
  }

  setInitialState() {
    return {
      comments: (this.picture && this.picture.comments) || [],
      comment: { 
        description: "", 
        picture_id: this.picture.id,
        user_id: this.currentUser.id
      }
    }
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name.match(INPUT_REGEX)[1]
    this.setState({
      comment: {
        description: value
      }
    })
  }

  handleCommentSubmit(event) {
    event.preventDefault()
    let form = this.refs.commentForm

    this.performRequest(form)
  }

  collectDataForm(form) {
    var formData = validatejs.collectFormValues(form)
    return formData
  }

  performRequest(form) {
    let formAttributes = this.collectDataForm(form)
    console.log(formAttributes)
    
    $.ajax({
      type: "POST",
      url: form.action,
      dataType: 'json',
      data: formAttributes,
      success: this.handleSuccessResponse.bind(this),
      error: this.handleErrorResponse.bind(this)
    })
  }

  updateData(response) {
    let toBeUpdated = {
      comments: response.picture.comments
    }
    console.log(this.state)
    console.log(toBeUpdated)
    this.setState(toBeUpdated)
  }

  handleSuccessResponse(response) {
    this.updateData(response)
    flash_messages.addMessage({id: Date.now(), text: response.message, type: 'success'})
  }

  handleErrorResponse(response) {
    //ADblocker check
    let form = this.refs.commentForm
    if(response.status === 0 && response.statusText === "error") {
      form.submit()
    } else {
      console.log(response)
      flash_messages.addMessage({id: Date.now(), text: response, type: 'error'})
    }
  }

  render () {
    const pictureComments = this.picture.comments.map((cm) => {
      return (
        <div>
          <p>{ cm.description } </p>
        </div>
      )
    })

    return (
      <div className="one-picture-container">
        <li className="one-picture">
          <img className="asdsad" src={this.picture.image_url}/>
        </li>
        <li className="comments-picture">
          { pictureComments }
          { this.currentUser &&
          <div className="comment-box">
            <form ref="commentForm" action={`/comments`} onSubmit={ this.handleCommentSubmit.bind(this) } method="POST">
              <input type="hidden" name="comment[picture_id]" value={this.picture.id}/>
              <input type="hidden" name="comment[user_id]" value={this.picture.user_id}/>
              <input type="text" name="comment[description]" onChange={ this.handleInputChange.bind(this) }/>
              <button className="button_primary" type="submit">Save comment</button>
            </form>
          </div>
          }
        </li>
      </div>
    )
  }

}
export default PictureBox
