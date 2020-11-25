import React from "react"
import { Field } from 'formik'

export const Textarea = ({ name, label }) => {
  return <div className='input'>
    <Field id={ name } name={ name } >
      {({ field, form, ...rest }) => {
        const { value } = field
        const labelTouched = value ? 'input__label-touched' : null
        return <>
          <label htmlFor={ name } className={`input__label input__label-textarea ${ labelTouched }`} >{ label }</label>
          <textarea id={ name } name={ name } { ...field } { ...rest } className='input__textarea' />
        </>
      }}
    </Field>
  </div>
}