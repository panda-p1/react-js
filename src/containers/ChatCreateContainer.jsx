import React, {PureComponent, Component} from "react";
import {connect} from "react-redux";
import { ChatCreate } from "components/ChatCreate";
import {add} from "actions/chats";
import { push } from 'connected-react-router';
import { Map } from 'immutable'



class ChatCreateContainer extends PureComponent {
    handleCreateChat = (input) => {
        let {createChat, idx, redirect} = this.props
        const value = input.value.concat('')
        input.value = ''
        idx++;
        idx.toString()
        createChat({value, idx})
        redirect(idx)
    }

    render() {
        return (
            <ChatCreate getName={this.handleCreateChat}/>
        )
    }


}

function mapStateToProps(state) {
    const chats = state.chats.get('entries');
    console.log(state.chats)
    console.log(state.chats.toJS())
    const lastIdx = Object.keys(chats.toJS())[Object.keys((chats.toJS())).length-1]
    console.log(chats)
    return {
      idx: lastIdx ? lastIdx : 0,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createChat: (size) => dispatch(add(size)),
        redirect: (chatSize) => dispatch(push(`/chats/${chatSize}`))
    }
}
export const ChatCreateRedux = connect(mapStateToProps, mapDispatchToProps)(ChatCreateContainer)