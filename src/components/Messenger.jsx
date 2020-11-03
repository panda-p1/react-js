import React, { Component } from 'react'
import { MessageForm } from './MessageForm'

export class Messenger extends Component {
    state = {
        messages: [],
    };
    handlerMessageSend = (message1) => {
        this.setState({
            messages: this.state.messages.concat([message1])
        })
    };

    componentDidUpdate() {
        if(this.state.messages[this.state.messages.length-1].author !== 'bot') {
            setTimeout(() => {
                this.setState( {
                    messages: this.state.messages.concat([{message: 'Hi, I cant understand you', author: 'bot'}])
                })
            }, 1000)
        }
        
    };
    
    render() {
        const {messages} = this.state;
        return (
            <div>
                <ul>
                    {messages.map((message,ind) => <li key={ind}>{message.author} : {message.message}</li>)}
                </ul>
                <MessageForm onSend={this.handlerMessageSend}/>
                
            </div>
        )
    }
}
