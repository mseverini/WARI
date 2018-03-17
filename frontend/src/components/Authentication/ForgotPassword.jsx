import React from 'react'
import {Redirect} from 'react-router-dom'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import ForgotPasswordForm from './ForgotPasswordForm'

const forgotPasswordMutation = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }`


class ForgotPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      mutate: props.mutate,
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
        email:this.state.email,
      },
    }).then(() => {
      <Redirect to="/"/>
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
