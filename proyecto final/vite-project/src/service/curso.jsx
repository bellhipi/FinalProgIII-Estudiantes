import api from '../service/api'

const curService = {}

curService.getNumCursos = () => api.get('/cursosnum')
curService.getFiltrarMateria = (data) => api.post('/cursosmat', data)

export default curService