import React from 'react'
import { Link } from 'react-router'
import Bolt from './Bolt'

const mapBolts = (bolts) => {
  return bolts.map(bolt => <Bolt bolt={bolt} />);
}

const BoltList = ({ bolts }) =>
  <div>
    <table className="c-todo__list">
      <thead />
      <tbody>
        {mapBolts(bolts)}
      </tbody>
    </table>
    <Link >replaced</Link>
    <Link> removed </Link>
  </div>

export default BoltList
