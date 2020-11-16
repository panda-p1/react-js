import './Messenger.css'

import React, { Component } from 'react'

import { MessageForm } from 'components/MessageForm'
import { MessagesList } from "components/MessagesList";
import { MessagesListRedux } from "containers/MessagesListContainer";
import DeleteIcon from '@material-ui/icons/Delete'

export class Messenger extends Component {

    render() {
        const {messages, sendMessage} = this.props
        return (
            <div className="messenger">
                {messages ? <MessagesListRedux items={messages}/> : 'Choose the chat to continue the talking'}
                {messages ? <MessageForm onSend={sendMessage}/> : ''}
            </div>
        )
    }
}
