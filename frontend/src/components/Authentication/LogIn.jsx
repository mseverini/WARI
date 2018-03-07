import React from 'react'
import {graphql} from 'react-apollo'
import LogInForm from './LogInForm'
import gql from 'graphql-tag'

const logInMutation = gql`
mutation LogInUser($credentials: AuthProviderCredentials) {
  loginUser(credentials: $credentials)
  {token}
}`

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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

    this.setState({
      [name]: value
    })
  }


  async handleSubmit(e) {
    e.preventDefault()

    const credentials = {
      email: this.state.email,
      password: this.state.password,
    }

    this.state.mutate({
      variables: {
        credentials,
      },
    }).then((response) => {
      let token = response.data.loginUser.token
      global.sessionStorage.setItem('token', token)
      window.location.reload()
    }).catch((error) => {
      this.setState({error: error.graphQLErrors[0].message})
    })


  }


  render() {
    return (
      <div>
        <h2 className='center' style={{color:'red'}}>{this.state.error}</h2>
        <LogInForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

const LogInWithMutation = graphql(logInMutation)(LogIn)
export default LogInWithMutation
