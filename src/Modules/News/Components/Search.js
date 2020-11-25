import React from "react"

export const Search = ({ handleChange, value }) => {

  const labelTouched = value ? 'input__label-touched' : null

  return <div className='input'>
    <label htmlFor="text" className={ `input__label ${ labelTouched }` } >Введите поисковый запрос</label>
    <input name='text' type="text" onChange={ (e) => handleChange(e) }/>
  </div>
}