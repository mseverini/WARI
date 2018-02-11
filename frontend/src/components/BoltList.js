import React from 'react'
import Bolt from './Bolt'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

const listBolts = gql`query RouteQuery($route_id: ID!) {
  route(id:$route_id){
    name
    bolts{
      ids
    }
  }
}`

const mapBolts = (props) => {
  if(!props.data.loading){
    return props.data.route.bolts.map(bolt => <Bolt bolt={bolt} />)
  }
  else {
    return <h3>Loading...</h3>
  }
}

const BoltList = (props) =>
  <div>
    <h2>{!props.data.loading ? props.data.route.name : null} </h2>
        {mapBolts(props)}
  </div>

export default graphql(listBolts)(BoltList)
