import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import Area from './Area'
import Route from './Route'

const listRoutes = gql`query AreaQuery($area_id: ID!) {
  area(id:$area_id){
    name
    children{
      name
      id
    }
    climbing_routes{
      name
      id
    }
  }
}`

const mapAreas = (areas) => {
  return areas.map(area => <Area area={area} />);
}

const mapRoutes = (routes) => {
  return routes.map(route => <Route route={route} />);
}

const AreaList = (props) =>{
  return (
    <table className="c__list">
      <thead />
      <h2>{!props.data.loading ? props.data.area.name : null} </h2>
      <tbody>
      {!props.data.loading ? mapAreas(props.data.area.children).concat(mapRoutes(props.data.area.climbing_routes)) : null}
      </tbody>
    </table>
  )
}

export default graphql(listRoutes)(AreaList)
