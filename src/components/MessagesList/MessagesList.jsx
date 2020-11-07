import './MessagesList.css'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message, messageType } from "../Message";

import Box from '@material-ui/core/Box'

export class MessagesList extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        ),
    }

    render() {
        const items = this.props.items;
        return (
            <div className="messages-list">
                    {items.map((item,idx) => <Message key={idx} {...item} />)}
            </div>
        )

    }
}