import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Form, Button} from 'react-bootstrap'
import FieldGroup from '../Utils/FieldGroup'
import {Link} from 'react-router-dom'


const LogInForm = ({handleChange, handleSubmit, ...props}) => {
  return (
    <div>
      <h2 className='center'>Welcome to the SLCA's bolt database</h2>
      <h4 className='center'> We're stoked you're here </h4>
      <Grid fluid={true}>
        <Form onSubmit={handleSubmit}>
          <FieldGroup {...props} id={'login-field-email'} name={'email'} label={'Email'} type={'email'} onChange={handleChange}/>
          <FieldGroup {...props} id={'login-field-password'} type={'password'} name={'password'} label={'Password'} onChange={handleChange}/>
          <span className='center'>
            <Button type={'submit'}>Log In</Button>
            <Link to={'/SignUp'} style={{marginLeft:'15px'}}><Button>Sign Up</Button></Link>
          </span>
        </Form>
      </Grid>
    </div>
  )
}

LogInForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
LogInForm.defaultProps = {}

export default LogInForm
