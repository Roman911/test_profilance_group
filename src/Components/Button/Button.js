import React from "react"

export const Button = ({ type, name, handleClick, id }) => {
  return <button type={ type } className='btn' onClick={ () => handleClick ? handleClick(id ? id : null) : void(0) } >
    { name }
  </button>
}