import React from 'react'
import moment from 'moment'

export const Date = ({ date, format }) => {
  return <p className='date'>{ moment(date).format(format) }</p>
}