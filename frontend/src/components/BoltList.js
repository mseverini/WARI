import React from 'react'
import { Link } from 'react-router'
import Bolt from './Bolt'

const mapBolts = (bolts) => {
  return bolts.map(bolt => <Bolt bolt={bolt} />);
}

const BoltList = ({ bolts, route }) =>
  <div>
    <h2>route.name </h2>
        {mapBolts(bolts)}
  </div>

export default BoltList
