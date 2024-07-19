import api from '../service/api'

const docService = {}

docService.getDocente = (userLogged) => api.get(`/docentes/${userLogged}`)
docService.altaDocente = (values) => api.post('/docentesalta', values)
docService.loginDocente = (values) => api.post('/docenteslog', values)

export default docService