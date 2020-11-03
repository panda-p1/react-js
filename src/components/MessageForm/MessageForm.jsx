import './MessageForm.css'

import React, { Component } from 'react'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField"



export class MessageForm extends Component {
    state = {
        author: '',
        text: '',
    };
    static propTypes = {
        onSend: propTypes.func,
    };
    handlerMessageBtn = () => {
        const onSend = this.props.onSend;
        if(typeof (onSend) === 'function') {
            onSend(this.state);
            // document.querySelector('.test').value = '';
            this.setState({
                text: ''
            })
        }

    };
    handlerInput = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
        });
    };
    handlerEnterDown = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handlerMessageBtn()
        }
    }
    
    render() {
        const { author, text } = this.state;

        return(
            <div className="message-form">
                <TextField label="author" name="author" onChange={this.handlerInput} type="text" value={author}/><br/>
                <TextField label="message" name="text" onKeyDown={this.handlerEnterDown} onChange={this.handlerInput} type="text" value={text}/>
                <Button variant="contained" color="primary" onClick={this.handlerMessageBtn}>SEND!</Button>
            </div>
        )
    }
}

