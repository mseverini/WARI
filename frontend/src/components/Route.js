import React from 'react'
import { Link } from 'react-router'

const Route = ({ route }) =>
  <tr>
    <td>
      <Link to={"/Route/"+route.id} className="c__list_item">{route.name}</Link>
    </td>
  </tr>

export default Route
