import { Login, Register } from './features/Auth'
import { AuthLayout, MainLayout } from './components/layout'
import { Home } from './features/Home'
import { NotFound } from './components/common/NotFound'
import { Call } from './features/Call'
import { Contact } from './features/Contact'


const loginRoute = [{
    path: '/login',
    exact: true,
    component: Login,
    layout: AuthLayout
}]

const publicRoutes = [
    {
        path: '/register',
        exact: true,
        component: Register,
        layout: AuthLayout
    },
    {
        path: '/*',
        component: NotFound,
        layout: AuthLayout
    }
]

const privateRoutes = [
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
        path: '/home',
        component: Home,
        layout: MainLayout
    },
]

export { publicRoutes, privateRoutes, loginRoute }