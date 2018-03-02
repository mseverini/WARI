import React from 'react'
import logo from '../images/logo.jpg'
import {Button} from 'react-bootstrap'

function logOut() {
  global.sessionStorage.removeItem('token')
  window.location.reload()
}
const Header = props =>
  <div className="c-header">
    <img src={logo} className="c-header__logo" alt="create-react-redux-app-logo" />
    {global.sessionStorage.getItem('token') ? (<Button onClick={logOut}>Log Out</Button>) : null}
  </div>

export default Header
