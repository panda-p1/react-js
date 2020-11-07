import './Layout.css'

import React, { Component } from 'react'

import {Header} from 'components/Header'
import {ChatList} from 'components/ChatList'
import {Messenger} from 'components/Messenger'
// import { AlignItemsList } from 'components/ChatList/chatListFunc'

export class Layout extends Component {

    render() {
        // console.log(this.props)
        return(
            <div className="Layout">
                <Header/>
                <div className="main-content">
                    <ChatList/>
                    <Messenger path={this.props}/>
                </div>
            </div>
        )
    }
}