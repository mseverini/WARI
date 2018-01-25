import React from 'react'
import { Link } from 'react-router'

const Route = ({ route }) =>
  <tr>
    <td className="c-todo__list_item" >
      <Link to={"/Route/"+route.id}>{route.name}</Link>
    </td>
  </tr>

export default Route
