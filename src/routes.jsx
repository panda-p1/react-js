import { Layout } from "components/Layout";
import { AboutPage } from "components/pages/AboutPage";
import { ChatList } from "components/ChatList";
import {Messenger} from "components/Messenger";
import chatListFunc from "components/ChatList/chatListFunc";
// import { AlignItemsList } from "components/ChatList/chatListFunc"

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
        path: '/chat/:id',
        exact: true,
        component: Layout
    }
]