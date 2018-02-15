import React from 'react'
import Bolt from './Bolt'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import CreateBolts from "./CreateBolts"


const BoltList = (props) => {
    if(!props.data.loading) {
      return (
        <div>
          <h2>{props.data.route.name} </h2>
          {
            props.data.route.bolts == 0 ?
              <CreateBolts {...props}/> :
              props.data.route.bolts.map(bolt => <Bolt bolt={bolt} />)
          }
        </div>
      )
    }
    return <h2>...Loading</h2>
}

export default BoltList
