import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, send, add, blink, deleteMessage, deleteChat } from 'actions/chats'

const initialState = new Map({
    loading: false,
    entries: new Map()
})

export const chatsReducer = handleActions({
    [load]: (state, action) => {
        return (state.set('entries', fromJS(
            {
                '1': {
                    id: 1,
                    messages: [{
                        text: "this is chat №1", author: 'bot'
                    }],
                    name: 'Chat 1',
                    unreadMessage: false,
                },
                '2': {
                    id: 2,
                    messages: [{
                        text: "this is chat №2", author: 'bot'
                    },],
                    name: 'Chat 2',
                    unreadMessage: false,
                },
                '3': {
                    id: 3,
                    messages: [{
                        text: "this is chat №3", author: 'bot'
                    },],
                    name: 'Chat 3',
                    unreadMessage: false,
                }
            }
        )));
    },
    [send]: (state, action) => {
        const {chatId, ...message} = action.payload;
        return state.mergeIn(['entries', chatId, 'messages'], message)
    },
    [add]: (state, action) => {
        const { value, idx } = action.payload;
        console.log(action.payload)
        const newState = state.toJS();
        // console.log(newState.entries[chatSize])
        newState.entries[idx] = {
                id: idx,
                messages: [
                    {
                        text: `this is chat №${idx}`, author: 'bot'
                    }
                ],
                name: `${value}`,
                unreadMessage: false,
        }
        console.log(newState)
        return fromJS(newState)
    },
    [blink]: (state, action) => {
        const chatId = action.payload[0]
        const boolean = action.payload[1]
        return state.setIn(['entries', `${chatId}`, `unreadMessage`], boolean)
    },
    [deleteMessage]:(state, action) => {
        const messageId = action.payload[0];
        const chatId = action.payload[1];
        return state.setIn(['entries', chatId, `messages`], state.getIn(['entries', chatId, `messages`]).delete(messageId))
    },
    [deleteChat]: (state, action) => {
        const chatId = action.payload;
        const newState = state.toJS()
        delete newState.entries[chatId]
        return fromJS(newState);
    }
}, initialState)

