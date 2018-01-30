import React from 'react'
import { Link } from 'react-router'

const Area = ({ area }) =>
  <tr>
    <td>
      <Link to={"/Area/"+area.id} className="c__list_item" >{area.name}</Link>
    </td>
  </tr>

export default Area
