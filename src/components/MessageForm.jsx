import React, { Component } from 'react'
import propTypes from 'prop-types'

export class MessageForm extends Component {
    state = {
        author: '',
        message: '',
    };
    static propTypes = {
        onSend: propTypes.func,
    };
    handlerMessageBtn = () => {
        const onSend = this.props.onSend;
        if(typeof (onSend) === 'function') {
            onSend(this.state);
        }
        
    };
    handlerInput = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
        });
    };
    
    render() {
        return(
            <div>
                <input name="author" onChange={this.handlerInput} type="text" placeholder="author"/><br/>
                <textarea name="message" onChange={this.handlerInput} placeholder="message"/>
                <button onClick={this.handlerMessageBtn}>Отправить!</button>
            </div>
        )
    }
}

