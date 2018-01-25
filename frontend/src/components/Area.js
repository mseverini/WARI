import React from 'react'
import { Link } from 'react-router'

const Area = ({ area }) =>
  <tr>
    <td className="c-todo__list_item" >
      <Link to={"/Area/"+area.id}>{area.name}</Link>
    </td>
  </tr>

export default Area
