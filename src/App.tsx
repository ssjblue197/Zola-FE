import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, privateRoutes, loginRoute } from './routes'
import { checkIsAuthenticated } from '@/utils/auth'

function App() {

  return (
    <Router>
      <div className="m-0 p-0 w-screen h-screen">
        <Routes>
          {
            loginRoute.map((route, index) => {
              const Layout = route.layout
              const Page = route.component
              return (<Route
                key={index}
                path={route.path}
                element={
                  checkIsAuthenticated()
                    ? <Navigate to="/home" />
                    : <Layout><Page /></Layout>
                }
              >
              </Route>)
            })
          }
          {
            publicRoutes.map((route, index) => {
              const Layout = route.layout
              const Page = route.component
              return (<Route
                key={index}
                path={route.path}
                element={
                  <Layout><Page /></Layout>
                }>
              </Route>)
            })
          }
          {
            privateRoutes.map((route, index) => {
              const Layout = route.layout
              const Page = route.component
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    checkIsAuthenticated()
                      ? <Layout><Page /></Layout>
                      : <Navigate to="/login" />
                  }>
                </Route>
              )
            })
          }
        </Routes>
      </div>
    </Router>
  )
}

export default App
