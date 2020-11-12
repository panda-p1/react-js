import './Layout.css'

import React, { Component } from 'react'

import {Header} from 'components/Header'
import {ChatList} from 'components/ChatList'
import {MessengerRedux} from 'containers/MessengerContainer'
import {ChatCreate} from "components/ChatCreate";

// import { AlignItemsList } from 'components/ChatList/chatListFunc'

export class Layout extends Component {

    render() {
        return(
            <div className="Layout">
                <Header/>
                <div className="main-content">
                    <ChatList/>
                    <MessengerRedux props={this.props}/>
                </div>
                <ChatCreate/>
            </div>
        )
    }
}