import React from "react"
import { Button, Date } from '../../../Components'

export const Post = ({ isAdmin, id, title, text, approve, date, removePost, approvePost }) => {
  return <div className='post'>
    <div className='flex post__header' >
      <h4>{ title }</h4>
      <Date date={ date }  format='LL' />
    </div>
    <div>
      { text }
    </div>
    {
      isAdmin === 'Admin' ? <div className='post__buttons'>
        <Button name='Удалить стаью' handleClick={ removePost } id={ id } />
        {
          approve || <Button name='Одобрить стаью' handleClick={ approvePost } id={ id } />
        }
      </div> : null
    }
  </div>
}