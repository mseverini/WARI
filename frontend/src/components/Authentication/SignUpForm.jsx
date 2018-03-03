import React from 'react'
import {Grid, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import FieldGroup from '../Utils/FieldGroup'

const SignUpForm = ({handleSubmit, handleChange, ...props}) => {
  return (
    <Grid fluid={true}>
      <Form onSubmit={handleSubmit}>
        {/*<FieldGroup {...props} id={'signup-field-name'} name={'name'} label={'Name'} placeholder={'Enter your name'} type={'text'} onChange={handleChange}/>*/}
        <FieldGroup {...props} id={'signup-field-email'} name={'email'} label={'Email'} placeholder={'Enter your email'} type={'email'} onChange={handleChange}/>
        <FieldGroup {...props} id={'signup-field-password'} name={'password'} label={'Password'} type={'text'} onChange={handleChange}/>
        <span className='center'>
          <Button type={'submit'} style={{width:'fit-content'}}>Create User</Button>
        </span>
      </Form>
    </Grid>

  )
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}
SignUpForm.defaultProps = {}

export default SignUpForm
