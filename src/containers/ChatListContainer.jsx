import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { ChatList } from "components/ChatList"
import { deleteChat } from "actions/chats";
import {List} from 'immutable'

class ChatListContainer extends PureComponent {
    handleDirect = (chatLink) => {
        const { redirect } = this.props
        redirect(chatLink)
    }
    handleDeleteChat = (chatId) => {
      const {deleteChat} = this.props
      deleteChat(chatId)
    }
     render() {
        const { chats } = this.props
        return (
            <ChatList chats={chats} redirect={this.handleDirect} deleteChat={this.handleDeleteChat}/>
        )
    }

}

function mapStateToProps(state) {
    let chats = state.chats.get('entries') ? state.chats.get(`entries`) : state.chats;

    return {
          chats: chats.map((entry) => (
                {name: entry.get('name'), link: `/chats/${entry.get(`id`)}`, unreadMessage: entry.get('unreadMessage'), id: entry.get('id')}
        )).toList().toJS(),
    }
}
function mapDispatchToProps(dispatch) {
    return {
      redirect: (chatLink) => dispatch(push(chatLink)),
      deleteChat: (chatId) => dispatch(deleteChat(chatId))
    }
}

export const ChatListRedux = connect(mapStateToProps,mapDispatchToProps)(ChatListContainer)
