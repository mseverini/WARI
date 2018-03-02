import React from 'react'
import logo from '../images/logo.jpg'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function logOut() {
  global.sessionStorage.removeItem('token')
  window.location.reload()
}
const Header = props =>
  <div className="c-header">
    <Link to={'/'}><img src={logo} className="c-header__logo" alt="create-react-redux-app-logo" /></Link>
    {global.sessionStorage.getItem('token') ? (<Button onClick={logOut}>Log Out</Button>) : null}
  </div>

export default Header
