import {deleteMessage} from "actions/chats";
import {connect} from "react-redux";
import React, {PureComponent} from "react";
import {ChatCreate} from "components/ChatCreate";
import {MessagesList} from "components/MessagesList";


class MessagesListContainer extends PureComponent {
  handleDeleteMessage = (id) => {
    const {deleteMessage, chatId} = this.props;
    deleteMessage([id, chatId])
  }

  render() {
    const {items} = this.props
    return (
      <MessagesList items={items} handleDelete={this.handleDeleteMessage}/>
    )
  }


}

function mapStateToProps(state) {
  const chatId = state.router.location.pathname.replace(/\D/ig,'')
  return {
    chatId: chatId,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteMessage: (id,chatId) => dispatch(deleteMessage(id, chatId)),
  }
}
export const MessagesListRedux = connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer)