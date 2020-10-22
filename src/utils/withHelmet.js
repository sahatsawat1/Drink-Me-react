import React from 'react'
import { Helmet } from 'react-helmet'

function withHelmet (title) {
  return Component => props => (
    <>
      <Helmet>
        <link href='https://fonts.google.com/specimen/Roboto?sidebar.open=true&selection.family=Roboto' />
        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}
export default withHelmet
