import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { Messenger } from "components/Messenger";
import { load, send } from 'actions/chats'
import {isArray} from "redux-actions/lib/utils/isArray";
class MessengerContainer extends PureComponent {
    componentDidMount() {
        const {loadChats}  = this.props;
        loadChats();
    }

    handleMessageSend = message => {
        const {sendMessage, chatId} = this.props

        sendMessage({
            ...message,
            chatId
        })
    }

    render() {
        const { chats, messages } = this.props;
        return(
            <Messenger sendMessage={this.handleMessageSend} chats={chats} messages={messages}/>
        )
    }
}

function mapStateToProps(state) {
    const chats = state.chats.get('entries') ? state.chats.get(`entries`) : state.chats;
    let messages = null;
    const currentId = state.router.location.pathname.replace(/\D/ig,'')
    if (currentId && chats.get(currentId)) {
        messages = chats.get(currentId).toJS().messages
    }

    return {
        chats: chats.map((entry) => (
            {name: entry.get('name'), link: `/chats/${entry.get(`id`)}`}
            )).toList().toJS(),
        messages,
        chatId: currentId
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(load()),
        sendMessage: (message) => dispatch(send(message)),
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer)