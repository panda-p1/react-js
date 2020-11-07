import './Messenger.css'

import React, { Component } from 'react'

import { MessageForm } from 'components/MessageForm'
import { MessagesList } from "components/MessagesList";

export class Messenger extends Component {
    state = {
        chats: {
            '1': {
                id: 1,
                messages: [{
                    text: "this is chat №1", author: 'bot'
                }],
                name: 'Chat1'
            },
            '2': {
                id: 2,
                messages: [{
                    text: "this is chat №2", author: 'bot'
                },],
                name: 'Chat2'
            },
            '3': {
                id: 3,
                messages: [{
                    text: "this is chat №3", author: 'bot'
                },],
                name: 'Chat3'
            }
        }
    };
    handlerMessageSend = (message) => {
        const { match } = this.props.path
        const { chats } = this.state
        const chat = chats[match.params.id]
        chat.messages.push(message)
        this.setState({
            chats: this.state.chats,

        })

    };

    toScroll = () => {
        let block = document.querySelector('.messages-list')
        block.scrollTop = block.scrollHeight;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if((this.messages).length) {
            const author = this.messages[this.messages.length-1].author;
            if(author !== 'bot') {
                setTimeout(() => {
                    this.handlerMessageSend({text: `Hi, ${author}, I cant understand you`, author: 'bot'})
                    this.toScroll()
                }, 1000)
            }
            this.toScroll()
        }

    };

    get messages() {
        const { chats }  = this.state;
        const { match } = this.props.path;
        let messages = null;
        if (match && chats[match.params.id]) {
            messages = chats[match.params.id].messages
        }
        // (messages) ? (return messages) : return []
        if (messages) {
            return messages
        }
        else {
            return []
        }
    }
    
    render() {

        return (
            <div className="messenger">
                {this.messages.length ? <MessagesList items={this.messages}/> : 'Choose the chat to continue the talking'}
                {this.messages.length ? <MessageForm onSend={this.handlerMessageSend}/> : ''}
            </div>
        )
    }
}
