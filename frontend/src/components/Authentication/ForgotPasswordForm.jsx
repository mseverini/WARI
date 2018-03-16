import React from 'react'
import {Grid, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import FieldGroup from '../Utils/FieldGroup'

const ForgotPasswordForm = ({handleSubmit, handleChange, ...props}) => {
  return (
    <Grid fluid={true}>
      <Form onSubmit={handleSubmit}>
        <FieldGroup {...props} id={'reset-password-field-email'} name={'email'} label={'Email'} placeholder={'Enter your email'} type={'email'} onChange={handleChange}/>
        <span className='center'>
          <Button type={'submit'} style={{width:'fit-content'}}>Create User</Button>
        </span>
      </Form>
    </Grid>

  )
}

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}
ForgotPasswordForm.defaultProps = {}

export default ForgotPasswordForm
