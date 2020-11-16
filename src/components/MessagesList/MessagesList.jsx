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
    toScroll = () => {
        let block = this.el;
        block ? block.scrollTop = block.scrollHeight : null;
    }
    componentDidUpdate() {
        this.toScroll();
    }

    getRef = (node) => this.el = node;

    render() {
        const {items, handleDelete} = this.props;
        return (
            <div className="messages-list" ref={this.getRef}>
                    {items.map((item,idx) => <Message handleDelete={handleDelete} key={idx} id={idx} {...item} />)}
            </div>
        )

    }
}