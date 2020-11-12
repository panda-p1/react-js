import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
// import { toJs } from 'immutable'

import { Messenger } from "components/Messenger";
import { load, send } from 'actions/chats'

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

function mapStateToProps(state, ownProps) {
    const chats = state.chats.get(`entries`);
    // console.log(ownProps)
    const {match} = ownProps.props;
    let messages = null;
    // console.log(chats.get(match.params.id))
    if (match && chats.get(match.params.id)) {
        // console.log(5555)
        // console.log(chats.get(match.params.id,'messages'))
        messages = chats.get(match.params.id).toJS().messages
        console.log(messages)
    }

    return {
        chats: chats.map((entry) => (
            {name: entry.get('name'), link: `/chats/${entry.get(`id`)}`}
            )).toList().toJS(),
        messages,
        chatId: match ? match.params.id : null
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(load()),
        sendMessage: (message) => dispatch(send(message))
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer)