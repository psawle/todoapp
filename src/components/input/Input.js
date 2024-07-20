import React from 'react'

import "./inputStyle.css"

export const Input = ({errormsg,...rest}) => {
  
  return ( 
    <>
    <input {...rest} />
    <span className='errMsg'>{errormsg}</span>
    </>
    )
}