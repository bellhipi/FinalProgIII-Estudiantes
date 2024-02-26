import { createContext, useEffect, useState , React } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'
export const ApiContext = createContext()

export const Context = ({ children }) => {
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
                listadocursos,
                getCursos
            }}>
            {children}
        </ApiContext.Provider>
    );
};