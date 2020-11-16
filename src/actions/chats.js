import { createAction } from 'redux-actions';

export const load = createAction('[Chats] Load');
export const send = createAction('[Chats] Send');
export const add = createAction('[Chats] Add');
export const blink = createAction('[Chats] Blink')
export const deleteMessage = createAction('[Chats] DeleteMessage')
export const deleteChat = createAction('[Chats] DeleteChat')