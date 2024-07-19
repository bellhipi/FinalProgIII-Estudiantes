import api from '../service/api'

const curService = {}

curService.getNumCursos = () => api.get('/cursosnum')
curService.getFiltrarMateria = (idcur) => api.get(`/cursosmat/${idcur}`)

export default curService