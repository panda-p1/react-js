import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './ChatList.css'
import DeleteIcon from "@material-ui/icons/Delete";


class AlignItemsList extends Component {
    render() {
        const {chatName, chatId, redirect, chatLink, unreadMessage, deleteChat } = this.props
        return (
        <List>

                <div onClick={() => redirect(chatLink)} className={`${unreadMessage ? 'blink-chat' : ''}`}>
                    <ListItem alignItems="flex-start" style={{position:'relative'}}>
                        <DeleteIcon onClick={() => deleteChat(chatId)} className="delete-icon"/>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={`/static/images/avatar/${chatId}.jpg`} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={`This is ${chatName}`}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </div>
                <Divider variant="inset" component="li" />
            </List>
        )
    }
}

export class ChatList extends Component {

    render() {
        const { chats, redirect, deleteChat } = this.props;
        return(
            <div>
                {chats.map((chat, idx) => <AlignItemsList deleteChat={deleteChat} key={idx+1} unreadMessage={chat.unreadMessage}
                                                          chatLink={chat.link} redirect={redirect} chatId={chat.id} chatName={chat.name}/>)}
            </div>
        )
    }
}