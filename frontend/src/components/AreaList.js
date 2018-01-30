import React from 'react'
import { Link } from 'react-router'
import Area from './Area'
import Route from './Route'

const mapAreas = (areas) => {
  return areas.map(area => <Area area={area} />);
}

const mapRoutes = (routes) => {
  return routes.map(route => <Route route={route} />);
}

const AreaList = ({ areas, routes }) =>
  <table className="c__list">
    <thead />
    <tbody>
      {mapAreas(areas).concat(mapRoutes(routes))}
    </tbody>
  </table>

export default AreaList
