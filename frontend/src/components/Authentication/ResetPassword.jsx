import React from 'react'
import {Redirect} from 'react-router-dom'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import ResetPasswordForm from './ResetPasswordForm'

const resetPasswordMutation = gql`
  mutation ResetPassword($code: code, $email: email, $password: password) {
    ResetPassword(code: $code, email: $email, password: $password)
    {token}
  }`


class ResetPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      code: '',
      password: '',
      mutate: props.mutate,
      loggedIn: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    let updates = {
      [name]: value,
    }

    this.setState(updates)
  }


  async handleSubmit(e) {
    e.preventDefault()
    this.state.mutate({
      variables: {
        code: this.state.code,
        email:this.state.email,
        password: this.state.password,
      },
    }).then((response) => {
      global.sessionStorage.setItem('token', response.data.createUser.token)
      this.setState({loggedIn: true})
    }).catch((error) =>{
      this.setState({error: error.graphQLErrors[0].message})
    })
  }

  render() {
    if (this.state.loggedIn) return <Redirect to="/"/>
    return (
      <div>
        <h2 className='center' style={{color:'red'}}>{this.state.error}</h2>
        <ResetPasswordForm handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

const ResetPasswordWithMutation = graphql(resetPasswordMutation)(ResetPassword)
export default ResetPasswordWithMutation
