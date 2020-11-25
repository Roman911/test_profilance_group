import React from "react"
import { Button, Input } from '../../../Components'

export const AuthForm = ({ loginError }) => {
  return <div className='auth'>
    <Input id='email' label='Email' type='email' />
    <Input id='password' label='Пароль' type='password' />
    {
      loginError ? <p className='auth__loginError'>Неправильный логин или пароль!</p> : null
    }
    <div className='auth__button'>
      <Button type="submit" name='Войти' />
    </div>
  </div>
}