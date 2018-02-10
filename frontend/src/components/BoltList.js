import React from 'react'
import Bolt from './Bolt'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

const listPosts = gql`query {
  route(id: 7) {
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

export default graphql(listPosts)(BoltList)
