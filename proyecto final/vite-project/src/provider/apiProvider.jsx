import { React } from 'react'
import { ApiContext } from "../context/apiContext"

export const ApiProvider = ({ children }) => {


   /*  useEffect(() => {
        //getCursos()
        getNumCursos()
        console.log('useefect')
        //llamar desde el login
        //getAlumnos()
        //updateAttendance()
      }, []);  */


    return (
        <ApiContext.Provider
            value={{ }}>
            {children}
        </ApiContext.Provider>
        
    )
}