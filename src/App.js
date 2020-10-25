import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import withHelmet from './utils/withHelmet'
import GlobalStyle from './components/GlobalStyle'
import Navbar from './components/Navbar'
import Footer from './components/Footer/index'

function App () {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback='...loading'>
          <Navbar />
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </>
  )
}

export default withHelmet('Hello')(App)
