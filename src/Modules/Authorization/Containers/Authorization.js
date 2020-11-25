import React, { useState } from "react"
import { Formik, Form } from 'formik'
import { useDispatch } from "react-redux"
import { AuthForm } from '../Components/AuthForm'
import validateForm from '../../../utils/validate'
import { modalActions, userActions } from '../../../redux/actions'

export const Authorization = () => {
  const [ loginError, setLoginError ] = useState(null)
  const dispatch = useDispatch()
  const initialValues = { email: '', password: '' }
  const validate = values => {
    let errors = {}
    validateForm({ values, errors })
    return errors
  }
  const onSubmit = (values) => {
    if (values.email === 'admin@test.com') {
      if (values.password === 'Admin123') {
        dispatch(userActions.setData({
          id: '01',
          name: 'Admin'
        }))
        dispatch(modalActions.closedModal())
      } else {
        setLoginError(true)
      }
    } else if (values.email === 'user@test.com') {
      if (values.password === 'User123') {
        dispatch(userActions.setData({
          id: '02',
          name: 'User'
        }))
        dispatch(modalActions.closedModal())
      } else {
        setLoginError(true)
      }
    } else {
      setLoginError(true)
    }
  }
  return <Formik initialValues={ initialValues } onSubmit={ onSubmit } validate={ validate } >
    {formik => {
      return <Form>
        <AuthForm loginError={ loginError } />
      </Form>
    }}
  </Formik>
}