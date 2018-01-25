import React from 'react'
import { Link } from 'react-router'

const Bolt = ({ bolt }) =>
  <tr>
    <td className="c-todo__list_item" >
      {bolt.position}
    </td>
  </tr>

export default Bolt
