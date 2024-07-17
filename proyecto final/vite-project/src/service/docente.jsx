import api from '../service/api'

const docService = {}
docService.altaDocente = (values) => api.post('/docentesalta', values)
export default docService