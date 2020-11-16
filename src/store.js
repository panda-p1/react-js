import { createStore, applyMiddleware } from 'redux'
import { initReducer } from "./redusers";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { logger } from 'middlewares/logger'
import { bot } from 'middlewares/bot'

export const history = createBrowserHistory();

export const store = createStore(initReducer(history),applyMiddleware(logger, bot, routerMiddleware(history)))