import './Layout.css'

import React, { Component } from 'react'

import {Header} from 'components/Header'
import {ChatList} from 'components/ChatList'
import {MessengerRedux} from 'containers/MessengerContainer'
import {ChatCreateRedux} from "containers/ChatCreateContainer";
import {ChatListRedux} from "containers/ChatListContainer";

// import { AlignItemsList } from 'components/ChatList/chatListFunc'

export class Layout extends Component {

    render() {
        return(
            <div className="Layout">
                <Header/>
                <div className="main-content">
                    <ChatListRedux/>
                    <MessengerRedux props={this.props}/>
                </div>
                <ChatCreateRedux/>
            </div>
        )
    }
}