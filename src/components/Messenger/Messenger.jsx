import './Messenger.css'

import React, { Component } from 'react'

import { MessageForm } from 'components/MessageForm'
import { MessagesList } from "components/MessagesList";

export class Messenger extends Component {

    render() {
        const {chats, messages, sendMessage} = this.props
        return (
            <div className="messenger">
                {messages ? <MessagesList items={messages}/> : 'Choose the chat to continue the talking'}
                {messages ? <MessageForm onSend={sendMessage}/> : ''}
            </div>
        )
    }
}
