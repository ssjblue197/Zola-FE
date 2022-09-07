import { Login, Register } from './features/Auth'
import { AuthLayout, MainLayout } from './components/layout'
import { Home } from './features/Home'
import { NotFound } from './components/common/NotFound'
import { Call } from './features/Call'
import { Contact } from './features/Contact'
import { Messages } from './features/Messages'


const appRoutes = [
    {
        path: '/register',
        exact: true,
        component: Register,
        layout: AuthLayout
    },
    {
        path: '/login',
        exact: true,
        component: Login,
        layout: AuthLayout
    },
    {
        path: '/',
        component: Home,
        layout: MainLayout
    },
    {
        path: '/call',
        component: Call,
        layout: MainLayout
    },
    {
        path: '/contact',
        component: Contact,
        layout: MainLayout
    },
    {
        path: '/messages',
        component: Messages,
        layout: MainLayout
    },
    {
        path: '/home',
        component: Home,
        layout: MainLayout
    },
    {
        path: '/*',
        component: NotFound,
        layout: AuthLayout
    },
]

export { appRoutes }