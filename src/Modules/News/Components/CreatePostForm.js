import React from "react"
import { Button, Input, Textarea } from '../../../Components'

export const CreatePostForm = () => {
  return <div className='create-post'>
    <Input id='title' label='Название статьи' type='text' />
    <Textarea name='text' label='Текст' />
    <div className='create-post__button'>
      <Button type='submit' name='Отправить' />
    </div>
  </div>
}