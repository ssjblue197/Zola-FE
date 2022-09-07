import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { appRoutes } from './routes'

function App() {

  return (
    <Router>
      <div className="m-0 p-0 w-screen h-screen">
        <Routes>
          {
            appRoutes.map((route, index) => {
              const Layout = route.layout
              const Page = route.component
              return (<Route
                key={index}
                path={route.path}
                element={<Layout><Page /></Layout>}
              >
              </Route>)
            })
          }
        </Routes>
      </div>
    </Router>
  )
}

export default App
