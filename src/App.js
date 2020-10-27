import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import withHelmet from './utils/withHelmet'
import GlobalStyle from './components/GlobalStyle'
import Navbar from './components/Navbar'
import Footer from './components/Footer/index'
import Provider from './contexts/OrderContext'

function App () {
  return (
    <>
      <GlobalStyle />
      <Provider>
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
      </Router></Provider>
    </>
  )
}

export default withHelmet('Hello')(App)
