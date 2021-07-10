import React from 'react'
import { Link, useRouteMatch, Route } from "react-router-dom"
import SinglePage from './SinglePage'

const About = () => {
  const { url, path } = useRouteMatch()
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>App details</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>Meet</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  )
}
export default About

