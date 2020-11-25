import React from "react"
import { createPortal } from "react-dom"
import usePortal from "../../hooks/usePortal"
import { Authorization } from "../../Modules"

export const Modal = ({ id, closeModal }) => {
  const target = usePortal(id)
  return createPortal(
    <div className='modal'>
      <div className='modal__background'/>
      <div className='modal__close' onClick={ () => closeModal() }>X</div>
      <div className='modal__window'>
        <Authorization />
      </div>
    </div>,
    target,
  )
}