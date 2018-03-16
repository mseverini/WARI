import React from 'react'
import {Grid, Form, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import FieldGroup from '../Utils/FieldGroup'

const ResetPasswordForm = ({handleSubmit, handleChange, ...props}) => {
  return (
    <Grid fluid={true}>
      <Form onSubmit={handleSubmit}>
        <FieldGroup {...props} id={'reset-password-field-name'} name={'code'} label={'Code'} placeholder={'Enter your forgotten password code'} type={'text'} onChange={handleChange}/>
        <FieldGroup {...props} id={'reset-password-field-email'} name={'email'} label={'Email'} placeholder={'Enter your email'} type={'email'} onChange={handleChange}/>
        <FieldGroup {...props} id={'reset-password-field-password'} name={'password'} label={'New Password'} type={'text'} onChange={handleChange}/>
        <span className='center'>
          <Button type={'submit'} style={{width:'fit-content'}}>Create User</Button>
        </span>
      </Form>
    </Grid>

  )
}

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}
ResetPasswordForm.defaultProps = {}

export default ResetPasswordForm
