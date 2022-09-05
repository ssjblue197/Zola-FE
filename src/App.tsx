import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './routes'

function App() {

  return (
    <Router>
      <div className="m-0 p-0 w-screen h-screen">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Layout = route.layout
              const Page = route.component
              return <Route key={index} path={route.path} element={
                <Layout><Page/></Layout>
              }></Route>
            })
          }
          {
            privateRoutes.map((route, index) => {
              const Layout = route.layout
              const Page = route.component
              return <Route key={index} path={route.path} element={
                <Layout><Page/></Layout>
              }></Route>
            })
          }
        </Routes>
      </div>
    </Router>
  )
}

export default App
