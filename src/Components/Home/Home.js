import React from 'react'

export const Home = ({ data }) => {
  const userName = data ? data.name : 'Гость'
  return <div className='wrapper'>
    <h1>{ `Привет, ${ userName }` }</h1>
  </div>
}