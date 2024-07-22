import { React, useState} from 'react'
import { ApiContext } from "../context/apiContext"

export const ApiProvider = ({ children }) => {
    const [isUserLogged, setIsUserLogged] = useState(0);
    const [userLogged, setUserLogged] = useState(0);

    return (
        <ApiContext.Provider
            value={{ isUserLogged, setIsUserLogged, userLogged, setUserLogged }}>
            {children}
        </ApiContext.Provider>
        
    )
}