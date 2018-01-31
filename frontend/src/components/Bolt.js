import React from 'react'
import { Link } from 'react-router'
import Dropzone from 'react-dropzone'


const Bolt = ({ bolt }) =>
  <tr>
    <td >
      <div className="c-button">
      Bolt {bolt.position}
      </div>
      <span className="rating">
        <span className="star" href="#">☆</span>
        <span className="star" href="#">☆</span>
        <span className="star" href="#">☆</span>
        <span className="star" href="#">☆</span>
      </span>
    </td>
  </tr>

export default Bolt
