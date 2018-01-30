import React from 'react'
import { Link } from 'react-router'

const Bolt = ({ bolt }) =>
  <tr>
    <td className="bolt" >
      {bolt.position}
      <span className="rating">
        <span className="star" href="#">☆</span>
        <span className="star" href="#">☆</span>
        <span className="star" href="#">☆</span>
        <span className="star" href="#">☆</span>
      </span>
    </td>
  </tr>

export default Bolt
