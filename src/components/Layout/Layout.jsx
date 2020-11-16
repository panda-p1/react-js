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
      console.log(this.props)
        return(
            <div className="Layout">
                <Header/>
                <div className="main-content">
                    <ChatListRedux props={this.props}/>
                    <MessengerRedux props={this.props}/>
                </div>
                <ChatCreateRedux/>
            </div>
        )
    }
}