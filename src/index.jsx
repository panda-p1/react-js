import './index.css'

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route} from "react-router-dom";
import { Switch }  from 'react-router-dom'

import { Layout } from 'components/Layout'
import {routes}  from "./routes";
import {ChatList} from "components/ChatList";
import {AboutPage} from "components/pages/AboutPage";
import { Provider } from 'react-redux'
import { store } from './store'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Layout}/>
                {routes.map((route, idx) => {
                    return <Route key={idx} path={route.path} component={route.component}/>
                })}
                <Route exact path='/profile' component={Layout} />

            </Switch>
        </BrowserRouter>
    </Provider>
   ,
    document.getElementById('root')
);
