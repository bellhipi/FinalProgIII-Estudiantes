import { useEffect, useState , React } from 'react'
//import { useNavigate } from 'react-router-dom'
import api from '../service/api'
import { ApiContext } from "../context/apiContext"

export const ApiProvider = ({ children }) => {

    const [listadoCursos, setListadoCursos] = useState(0)
    const [materias, setMaterias] = useState([])
    const [listadoAlumnos, setListadoAlumnos] = useState(0)

    useEffect(() => {
        //getCursos()
        getNumCursos()
        getAlumnos()
        //updateAttendance()
      }, []);

/*     async function getCursos() {
        await api.get('/cursos').then((response) => {
            setListadoCursos(response.data)
        });
    } */

    async function getNumCursos() {
        await api.get('/cursosnum').then((response) => {
            setListadoCursos(response.data)
        });
    }

    async function getFiltrarMateria(id) {
        const data = {id}
        await api.post('/cursosmaterias', data).then((response) => {
            setMaterias(response.data)
        });
    }

    async function getAlumnos() {
        await api.get('/alumnos').then((response) => {
            setListadoAlumnos(response.data)
        });
    }

    async function updateAttendance(id, update) {
        const data = {id, update}
        await api.post('/attendance', data).then((response) => {
            getAlumnos()
        });
    }

    return (
        <ApiContext.Provider
            value={{listadoCursos, listadoAlumnos, getFiltrarMateria, materias, updateAttendance}}>
            {children}
        </ApiContext.Provider>
        
    )
}