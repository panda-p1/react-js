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
    handleMessageBtn = () => {
        const onSend = this.props.onSend;
        if(typeof (onSend) === 'function') {
            onSend(this.state);
            this.setState({
                text: ''
            })
        }

    };
    handleInput = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
        });
    };
    handleEnterDown = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleMessageBtn()
        }
    }
    
    render() {
        const { author, text } = this.state;

        return(
            <div className="message-form">
                <TextField label="author" name="author" onChange={this.handleInput} type="text" value={author}/><br/>
                <TextField label="message" name="text" onKeyDown={this.handleEnterDown} onChange={this.handleInput} type="text" value={text}/>
                <Button variant="contained" color="primary" onClick={this.handleMessageBtn}>SEND!</Button>
            </div>
        )
    }
}

