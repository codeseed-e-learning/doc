import React from 'react'

const Input = ({type , placeholder}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} className='border rounded-lg p-2' />
    </div>
  )
}

export default Input