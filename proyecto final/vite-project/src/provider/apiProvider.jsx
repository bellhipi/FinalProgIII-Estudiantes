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
        //updateAttendance()
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

    async function updateAttendance(id, update) {
        const data = {id, update}
        console.log('data',data)
        await api.post('/attendance', data).then((response) => {
            getAlumnos()
        });
    }

    return (
        <ApiContext.Provider
            value={{listadoCursos, listadoAlumnos, updateAttendance, getAlumnos}}>
            {children}
        </ApiContext.Provider>
        
    )
}