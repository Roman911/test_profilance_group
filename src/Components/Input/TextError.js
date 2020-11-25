import React from "react"

export const TextError = ({ children }) => {
  return <div className='text-error'>
    { children }
    <div className='text-error__triangle' />
  </div>
}