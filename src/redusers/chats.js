import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, send, add } from 'actions/chats'

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
                    name: 'Chat 1'
                },
                '2': {
                    id: 2,
                    messages: [{
                        text: "this is chat №2", author: 'bot'
                    },],
                    name: 'Chat 2'
                },
                '3': {
                    id: 3,
                    messages: [{
                        text: "this is chat №3", author: 'bot'
                    },],
                    name: 'Chat 3'
                }
            }
        )));
    },
    [send]: (state, action) => {
        // console.log(action.payload)
        const {chatId, ...message} = action.payload;
        // console.log(chatId,message)
        return state.mergeIn(['entries', chatId, 'messages'], message)
    },
    [add]: (state, action) => {
        let { value, chatSize } = action.payload;
        return state.mergeIn(['entries'],fromJS(
            {
                [chatSize]: {
                    id: {chatSize},
                    messages: [
                        {
                            text: `this is chat №${chatSize}`, author: 'bot'
                        }
                    ],
                    name: `${value}`
                }
            }
        ))
    }
}, initialState)

// export default chatReducer;