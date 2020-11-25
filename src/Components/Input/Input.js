import React from "react"
import { Field, ErrorMessage } from 'formik'
import { TextError } from './TextError'

export const Input = ({ id, label, type}) => {
  return <div className='input flex'>
    <Field id={ id } name={ id }>
      {({ field, form: { touched, errors }, ...rest }) => {
        const { value } = field
        const labelTouched = value ? 'input__label-touched' : null
        return <>
          <label className={ `input__label ${ labelTouched }` } htmlFor={ id }>{ label }</label>
          <input type={type} {...field} {...rest} />
          { touched[field.name] && errors[field.name] && <p className='input__error'>!</p> }
        </>
      }}
    </Field>
    <ErrorMessage name={ id } component={ TextError } />
  </div>
}