import React from 'react'
import { Link } from 'react-router'
import Bolt from './Bolt'

const mapBolts = (bolts) => {
  return bolts.map(bolt => <Bolt bolt={bolt} />);
}

const BoltList = ({ bolts, route }) =>
  <div>
    <h2>Route.name </h2>
    <table className="c__list">
      <thead />
      <tbody>
        {mapBolts(bolts)}
      </tbody>
    </table>
  </div>

export default BoltList
