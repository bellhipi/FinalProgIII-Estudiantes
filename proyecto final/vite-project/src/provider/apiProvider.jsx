import { React, useState, useEffect } from 'react'
import { ApiContext } from "../context/apiContext"

export const ApiProvider = ({ children }) => {
    const [isUserLogged, setIsUserLogged] = useState(0);
    const [userLogged, setUserLogged] = useState(0);

  
    useEffect(() => {
      /* if (userLogged !== undefined) {
        setIsUserLogged(true);
      } */
      if (isUserLogged){
        console.log('tipo de log',isUserLogged)
        console.log('id', userLogged)
      }else{
        console.log('tipo de log', isUserLogged)
        console.log('id', userLogged)
      }
    }, [isUserLogged]);


    return (
        <ApiContext.Provider
            value={{ isUserLogged, setIsUserLogged, userLogged, setUserLogged }}>
            {children}
        </ApiContext.Provider>
        
    )
}