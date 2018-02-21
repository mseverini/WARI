import React from 'react'
import Bolt from './Bolt'
import Anchor from './Anchor'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import CreateBolts from "./CreateBolts"



function displayPitches(bolts, anchors, pitches) {
  let boltNumber = 0
  let anchorIndex = 0
  let routeElements = []
  for(let i=0; i < pitches; i++){
    if (anchorIndex < anchors.length && anchors[anchorIndex].pitch == i ){
      routeElements.push(<Anchor anchor={anchors[anchorIndex]} />)
      anchorIndex ++
    }
    while(boltNumber < bolts.length && bolts[boltNumber].pitch == i){
      routeElements.push(<Bolt bolt={bolts[boltNumber]} />)
      boltNumber ++
    }
  }
  return (
    <div>
      {routeElements}
    </div>
  )
}

const BoltList = (props) => {
    if(props.data.loading === false) {
      return (
        <div>
          <h2>{props.data.route.name} </h2>
          {
            props.data.route.bolts == 0 && props.data.route.anchors == 0  ?
              <CreateBolts {...props}/> :
              displayPitches( props.data.route.bolts, props.data.route.anchors, props.data.route.pitches)
          }
        </div>
      )
    }
    return <h2>...Loading</h2>
}

export default BoltList
