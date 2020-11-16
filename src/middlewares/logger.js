export function logger(store) {
    return function wrapDispatch(next) {
        return function dispatchAndLog(action) {
            // console.log('Activation', action);
            // console.log('PrevState', store.getState().chats.toJS());

            const result = next(action);
            // console.log('nextState', store.getState().chats.toJS());

            return result
        }
    }
}