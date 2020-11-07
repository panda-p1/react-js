import './index.css'

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import { Switch }  from 'react-router-dom'

import { Layout } from 'components/Layout'
import {routes}  from "./routes";
import {ChatList} from "components/ChatList";
import {AboutPage} from "components/pages/AboutPage";


ReactDom.render(
    <BrowserRouter>
        <Switch>
                    <Route exact path='/' component={Layout}/>
                    {routes.map((route, idx) => {
                            return <Route key={idx} path={route.path} component={route.component}/>
                    })}
                    <Route exact path='/profile' component={Layout} />

        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
