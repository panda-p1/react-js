import './Message.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


export const messageType = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export class Message extends Component {
    static propTypes = messageType;

    // get direction() {
    //     return this.props.author === 'bot' ? 'start' : 'end';
    // }

    render() {
        const {author, text} = this.props;
        const classes = classNames('message', {
            'message-owner': author !== 'bot',
            'message-companion': author === 'bot'
        })
        return (

            // <div className="message" style={{ alignSelf: `flex-${this.direction}` }}>
            <div className={classes}>
                <div>{text}</div>
                <div className="message-sender">{author}</div>
            </div>
        )
    }
}