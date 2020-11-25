import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '../'

export const NavBar = ({ data, openAuth, logOut }) => {
  return <div className='navBar'>
    <div className='wrapper'>
      <div className='flex'>
        <nav>
          <ul className='flex'>
            <Link to='/'>
              <img src="./logo.png" alt=""/>
            </Link>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/news">Новости</Link>
            </li>
          </ul>
        </nav>
        <div>
          {
            data ? <Button name='Выход' handleClick={ logOut } /> : <Button name='Вход' handleClick={ openAuth } />
          }
        </div>
      </div>
    </div>
  </div>
}