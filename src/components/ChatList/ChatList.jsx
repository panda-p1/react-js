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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));
class AlignItemsList extends Component {
    render() {
        const {chatName, chatId} = this.props
        return (
            <List>
                <Link to={`/chat/${chatId}`} style={{textDecoration: 'none'}}>
                    <ListItem alignItems="flex-start">
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
                </Link>
                <Divider variant="inset" component="li" />
                {/*<Link to="/chat/2" style={{textDecoration: 'none'}}>*/}
                {/*    <ListItem alignItems="flex-start">*/}
                {/*        <ListItemAvatar>*/}
                {/*            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />*/}
                {/*        </ListItemAvatar>*/}
                {/*        <ListItemText*/}
                {/*            primary="Summer BBQ"*/}
                {/*            secondary={*/}
                {/*                <React.Fragment>*/}
                {/*                    <Typography*/}
                {/*                        component="span"*/}
                {/*                        variant="body2"*/}
                {/*                        className={classes.inline}*/}
                {/*                        color="textPrimary"*/}
                {/*                    >*/}
                {/*                        to Scott, Alex, Jennifer*/}
                {/*                    </Typography>*/}
                {/*                    {" — Wish I could come, but I'm out of town this…"}*/}
                {/*                </React.Fragment>*/}
                {/*            }*/}
                {/*        />*/}
                {/*    </ListItem>*/}
                {/*</Link>*/}
                {/*<Divider variant="inset" component="li" />*/}
                {/*<Link to="/chat/3" style={{textDecoration: 'none'}}>*/}
                {/*    <ListItem alignItems="flex-start">*/}
                {/*        <ListItemAvatar>*/}
                {/*            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />*/}
                {/*        </ListItemAvatar>*/}
                {/*        <ListItemText*/}
                {/*            primary="Oui Oui"*/}
                {/*            secondary={*/}
                {/*                <React.Fragment>*/}
                {/*                    <Typography*/}
                {/*                        component="span"*/}
                {/*                        variant="body2"*/}
                {/*                        className={classes.inline}*/}
                {/*                        color="textPrimary"*/}
                {/*                    >*/}
                {/*                        Sandra Adams*/}
                {/*                    </Typography>*/}
                {/*                    {' — Do you have Paris recommendations? Have you ever…'}*/}
                {/*                </React.Fragment>*/}
                {/*            }*/}
                {/*        />*/}
                {/*    </ListItem>*/}
                {/*</Link>*/}

            </List>
        )
    }
}

export class ChatList extends Component {

    render() {
        const { chats } = this.props;

        return(
            <div>
                {chats.map((chat, idx) => <AlignItemsList key={idx+1} chatId={idx+1} chatName={chat.name}/>)}
            </div>

                // <AlignItemsList/>
        )
    }
}