import { Login, Register } from './features/Auth'
import { AuthLayout, MainLayout } from './components/layout'
import { Home } from './features/Home'

const publicRoutes = [
    {
        path: '/login',
        component: Login,
        layout: AuthLayout
    },
    {
        path: '/register',
        component: Register,
        layout: AuthLayout
    }
]

const privateRoutes = [
    {
        path: '/home',
        component: Home,
        layout: MainLayout
    },
]

export { publicRoutes, privateRoutes}