import React from 'react'
import {Redirect} from 'react-router-dom'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import SignUpForm from './SignUpForm'

const signUpMutation = gql`
  mutation SignUpUser($credentials: AuthProviderCredentials) {
    createUser(credentials: $credentials)
    {token}
  }`


class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
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
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    }
    this.state.mutate({
      variables: {
        credentials
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
        <SignUpForm handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

const SignUpWithMutation = graphql(signUpMutation)(SignUp)
export default SignUpWithMutation
