import './index.css'

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route} from "react-router-dom";
import { Switch }  from 'react-router-dom'
import { Layout } from 'components/Layout'
import {routes}  from "./routes";
import {Provider, ReactReduxContext} from 'react-redux'
import { store, history } from './store'
import { ConnectedRouter } from "connected-react-router";
import {withRouter} from "react-router";

ReactDom.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
                <Route exact path='/' component={withRouter(Layout)}/>
                {routes.map((route, idx) => {
                    return <Route key={idx} path={route.path} exact component={withRouter(route.component)}/>
                })}
                <Route exact path='/profile' component={Layout} />
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>
   ,
    document.getElementById('root')
);
