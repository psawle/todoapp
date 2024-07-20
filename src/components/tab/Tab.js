import React from 'react'

import "./tabStyle.css"

export const Tab = ({tabLables,handleTab ,tabName}) => {
  return (
    <div className='button-container'>
      {tabLables.map((item, index) => <button
         className={item === tabName?"tabButton":"btn"} 
      onClick={()=> handleTab(item)} key={index}>{item}</button>)}
    </div>
  )
}

 