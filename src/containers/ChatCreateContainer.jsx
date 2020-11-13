import React, {PureComponent, Component} from "react";
import {connect} from "react-redux";
import { ChatCreate } from "components/ChatCreate";
import {add} from "actions/chats";


class ChatCreateContainer extends Component {
    handleCreateChat = (input) => {
        let {createChat, chatSize} = this.props
        // console.log(chatSize)
        const value = input.value
        console.log(chatSize)
        chatSize++;

        chatSize.toString()
        createChat({value, chatSize})
    }
    render() {
        // console.log(this.props)
        // const { chats } = this.props
        return (
            <ChatCreate getName={this.handleCreateChat}/>
        )
    }


}

function mapStateToProps(state) {
    const chats = state.chats.get(`entries`);
    return {
      chatSize: chats.size,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createChat: (size) => dispatch(add(size))
    }
}
export const ChatCreateRedux = connect(mapStateToProps, mapDispatchToProps)(ChatCreateContainer)