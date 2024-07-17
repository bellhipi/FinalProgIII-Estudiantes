import api from '../service/api'

const aluService = {}

aluService.getAlumnos = () => api.get('/alumnos')
aluService.getFiltrarAlumnos = (data) => api.post('/alumnoscurso', data)
aluService.altaAlumno = (values) => api.post('/alumnosalta', values)
export default aluService
