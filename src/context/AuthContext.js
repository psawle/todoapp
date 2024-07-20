import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext();

export const AuthProvider = (props) => { 
    const [user, setUser] = useState("haa bhaaiiiiiiii");
  return (
    <AuthContext.Provider value ={{user,setUser}}>{props.children}</AuthContext.Provider>
  )
}
