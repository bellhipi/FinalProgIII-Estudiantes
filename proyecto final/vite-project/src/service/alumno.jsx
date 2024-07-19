import api from '../service/api'

const aluService = {}

aluService.getAlumno = (userLogged) => api.get(`/alumnos/${userLogged}`)
aluService.getFiltrarAlumnos = (idalu) => api.get(`/alumnoscurso/${idalu}`)
aluService.altaAlumno = (values) => api.post('/alumnosalta', values)
aluService.loginAlumno = (values) => api.post('/alumnoslog', values)

export default aluService

