import './Messenger.css'

import React, { Component } from 'react'

import { MessageForm } from 'components/MessageForm'
import { MessagesList } from "components/MessagesList";

export class Messenger extends Component {
    state = {
        messages: [],
    };
    handlerMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat([message])
        })
        this.toScroll()

    };

    toScroll = () => {
        let block = document.querySelector('.messages-list')
        block.scrollTop = block.scrollHeight;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const author = this.state.messages[this.state.messages.length-1].author;
        if(author !== 'bot') {
            setTimeout(() => {
                this.setState( {
                    messages: this.state.messages.concat([{text: `Hi, ${author}, I cant understand you`, author: 'bot'}])
                })
                this.toScroll()
            }, 1000)
        }
        
    };
    
    render() {
        const {messages} = this.state;
        return (
            <div className="messenger">
                <MessagesList items={messages}/>
                <MessageForm onSend={this.handlerMessageSend}/>
            </div>
        )
    }
}
