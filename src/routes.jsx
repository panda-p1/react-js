import { Layout } from "components/Layout";
import { AboutPage } from "components/pages/AboutPage";
import {ChatCreate} from "components/ChatCreate";
import { MessengerRedux } from "containers/MessengerContainer";

export const routes = [
    // {
    //     path: '/',
    //     exact: true,
    //     component: Layout
    // },
    {
        path: '/about',
        exact: true,
        component: AboutPage
    },
    {
        path: '/chats/:id',
        // exact: true,
        // component: MessengerRedux
        component: Layout,
    },
    {
        path: '/create/chat',
        // exact: true,
        component: Layout
    }
]