import { createContext, useEffect, useState , React } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../service/api'
export const ApiContext = createContext(null)

/* export const Context = ({ children }) => {
    const [listadocursos, setListadoCursos] = useState()

    useEffect(() => {
        getCursos();
      }, []);

    async function getCursos() {
        console.log('ejecutando')
        await api.get('/').then((response) => {
            setListadoCursos(response.data)
            console.log(response.data)
        });
    }


    return (
        <ApiContext.Provider
            value={{
                listadocursos
            }}>
            {children}
        </ApiContext.Provider>
    );
}; */