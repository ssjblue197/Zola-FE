import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './routes'
import { checkIsAuthenticated } from '@/utils/auth'
import { Provider } from 'react-redux';
import { store } from '@/app/store'


function App() {


  return (
    <Provider store={store}>
      <Router>
        <div className="m-0 p-0 w-screen h-screen">
          <Routes>
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
                  exact={route?.exact}
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
    </Provider>
  )
}

export default App
