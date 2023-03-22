import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Accountability Planner</title>
        <meta property="og:title" content="Forward Accountability Planner" />
      </Helmet>
    </div>
  )
}

export default Home
