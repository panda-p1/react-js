import React from 'react';
import ReactDom from 'react-dom';

// import { Messenger } from 'components/Messenger'
import {Layout} from 'components/Layout'

import './index.css'
// const messages = ['hi brother', 'what about you?', 'how are you?'];
// const Message = (props) => <h1>{props.text}</h1>;
// const MessageList = (props) => {
//     return props.messages.map(message => <Message text={message}/>) // dumb component
// };
ReactDom.render(
    <Layout/>,
    document.getElementById('root')
);
