import React, { Component } from 'react'
import AlignItemsList from './chatListFunc'
import {Link} from 'react-router-dom'

export class ChatList extends Component {
    render() {
        // console.log(this.props)
        return(
                <AlignItemsList/>
        )
    }
}