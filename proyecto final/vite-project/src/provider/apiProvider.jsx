import { useEffect, useState , React } from 'react'
//import { useNavigate } from 'react-router-dom'
import api from '../service/api'
import { ApiContext } from "../context/apiContext"

export const ApiProvider = ({ children }) => {

    const [listadoCursos, setListadoCursos] = useState(0)
    const [listadoAlumnos, setListadoAlumnos] = useState(0)

    useEffect(() => {
        getCursos()
        getAlumnos()
      }, []);

    async function getCursos() {
        await api.get('/cursos').then((response) => {
            setListadoCursos(response.data)
        });
    }

    async function getAlumnos() {
        await api.get('/alumnos').then((response) => {
            setListadoAlumnos(response.data)
        });
    }

    return (
        <ApiContext.Provider
            value={{listadoCursos, listadoAlumnos}}>
            {children}
        </ApiContext.Provider>
        
    )
}