import './Layout.css'

import React, { Component } from 'react'

import {Header} from 'components/Header'
import {ChatList} from 'components/ChatList'
import {Messenger} from 'components/Messenger'

export class Layout extends Component {

    render() {
        return(
            <div className="Layout">
                <Header/>
                <div className="main-content">
                    <ChatList/>
                    <Messenger/>
                </div>

            </div>
        )
    }
}