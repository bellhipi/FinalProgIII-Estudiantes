import { useEffect, useState , React } from 'react'
//import { useNavigate } from 'react-router-dom'
import api from '../service/api'
import { ApiContext } from "../context/apiContext"

export const ApiProvider = ({ children }) => {

    const [listadoCursos, setListadoCursos] = useState(0)
    const [materias, setMaterias] = useState([])
    const [alumnos, setAlumnos] = useState([])
    const [boletin, setBoletin] = useState([])
    //const [listadoAlumnos, setListadoAlumnos] = useState(0)

    useEffect(() => {
        //getCursos()
        getNumCursos()
        //llamar desde el login
        //getAlumnos()
        //updateAttendance()
      }, []);

/*     async function getCursos() {
        await api.get('/cursos').then((response) => {
            setListadoCursos(response.data)
        });
    } */
 ///estas funciones van en service separadas por entidades y el api provider lo elimino
    async function getNumCursos() {
        await api.get('/cursosnum').then((response) => {
            setListadoCursos(response.data)
        });
    }

    async function getFiltrarMateria(id) {
        const data = {id}
        await api.post('/cursosmat', data).then((response) => {
            setMaterias(response.data)
        });
    }   

    async function getFiltrarBoletin(id) {
        const data = {id}
        await api.post('/boletin', data).then((response) => {
            setBoletin(response.data)
        });
    }

    async function getFiltrarAlumnos(id) {
        const data = {id}
        await api.post('/cursosalumnos', data).then((response) => {
            setAlumnos(response.data)
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
            value={{listadoCursos, getFiltrarMateria, getFiltrarBoletin, boletin, materias, getFiltrarAlumnos, alumnos, updateAttendance}}>
            {children}
        </ApiContext.Provider>
        
    )
}