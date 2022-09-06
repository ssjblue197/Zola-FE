import { Login, Register } from './features/Auth'
import { AuthLayout, MainLayout } from './components/layout'
import { Home } from './features/Home'
import { NotFound } from './components/common/NotFound'

const publicRoutes = [
    {
        path: '/login',
        exact: true,
        component: Login,
        layout: AuthLayout
    },
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
]

export { publicRoutes, privateRoutes}