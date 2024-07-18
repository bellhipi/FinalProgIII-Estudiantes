import api from '../service/api'

const docService = {}

docService.altaDocente = (values) => api.post('/docentesalta', values)
docService.loginDocente = (values) => api.post('/docenteslog', values)

export default docService