import { React, useState, useEffect } from 'react'
import { ApiContext } from "../context/apiContext"

export const ApiProvider = ({ children }) => {
    const [isUserLogged, setIsUserLogged] = useState('');
    const [userLogged, setUserLogged] = useState('');

  
    useEffect(() => {
      /* if (userLogged !== undefined) {
        setIsUserLogged(true);
      } */
      if (isUserLogged != ''){
        console.log(isUserLogged)
      }else{
        console.log(isUserLogged)
      }
    }, [isUserLogged]);


    return (
        <ApiContext.Provider
            value={{ isUserLogged, setIsUserLogged, userLogged, setUserLogged }}>
            {children}
        </ApiContext.Provider>
        
    )
}