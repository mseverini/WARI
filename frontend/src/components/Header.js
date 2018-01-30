import React from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.jpg'

const Header = props =>
  <div className="c-header">
    <img src={logo} className="c-header__logo" alt="create-react-redux-app-logo" />
    <Navigation />
  </div>

export default Header
