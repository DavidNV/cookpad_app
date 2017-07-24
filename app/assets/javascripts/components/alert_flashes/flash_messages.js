import React, { Component } from 'react'
import Alert from './alert.js.erb'
import update from 'immutability-helper'
import PropTypes from 'prop-types'

class FlashMessages extends Component {

  constructor(props) {
    super(props)
    this.state = { messages: props.messages }
  }

  componentDidMount() {
    window.flash_messages = this
  }

  addMessage(message) {
    const messages = update(this.state.messages, { $push: [message] })
    this.setState({ messages: messages })
  }

  removeMessage(message) {
    const index = this.state.messages.indexOf(message)
    const messages = update(this.state.messages, { $splice: [[index, 1]] })
    this.setState({ messages: messages })
  }

  render () {
    const alerts = this.state.messages.map( message =>
      <Alert key={ message.id } message={ message }
        onClose={ () => this.removeMessage(message) } />
    )

    return(
      <div style={{width: "250px", zIndex: "2", position: 'fixed', top: '100px', right: '140px'}}>
        { alerts }
      </div>
    )
  }
}

FlashMessages.propTypes = {
  messages: PropTypes.array.isRequired
}

export default FlashMessages
