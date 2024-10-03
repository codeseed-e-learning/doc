import React from 'react'

const Button = ({text}) => {
  return (
    <>
    <button className='bg-brand-blue text-white p-2 rounded-lg px-5'>{text}</button>
    </>
  )
}

export default Button