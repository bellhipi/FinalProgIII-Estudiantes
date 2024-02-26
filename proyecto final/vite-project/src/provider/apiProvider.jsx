import { useEffect, useState , React } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../service/api'
import { ApiContext } from "../context/apiContext"

export const ApiProvider = ({ children }) => {

    const [listadoCursos, setListadoCursos] = useState()

    useEffect(() => {
        getCursos();
      }, []);

    async function getCursos() {
        await api.get('/cursos').then((response) => {
            setListadoCursos(response.data)
        });
    }

    return (
        <ApiContext.Provider
            value={{listadoCursos}}>
            {children}
        </ApiContext.Provider>
        
    )
}