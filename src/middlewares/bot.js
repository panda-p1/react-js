import { send } from 'actions/chats'
import { blink } from "actions/chats";

export const bot = store => next => action => {
  if (action.type === send.toString()) {
    const { chatId, author } = action.payload;
    if (author!== 'bot') {
      setTimeout(() => {
        store.dispatch(send({chatId, author: 'bot', text: `Hi, ${author}! Bot on the connect`}))
        store.dispatch(blink([chatId, true]))
        setTimeout(() => store.dispatch(blink([chatId, false])),200)
      },1000)
    }
  }
  return next(action)
}