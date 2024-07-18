import api from '../service/api'

const aluService = {}

//swService.getPersonById = (id) => api.get(`/people/${id}`)
//aluService.getAlumno = (userLogged) => api.get('/alumnos')
aluService.getAlumno = (userLogged) => api.get(`/alumnos/${userLogged}`)
aluService.getFiltrarAlumnos = (data) => api.post('/alumnoscurso', data)
aluService.altaAlumno = (values) => api.post('/alumnosalta', values)
aluService.loginAlumno = (values) => api.post('/alumnoslog', values)

export default aluService

