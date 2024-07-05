import api from '../service/api'

const boleService = {}

boleService.getFiltrarBoletin = (data) => api.post('/boletin', data)
boleService.getFiltrarAusentes = (data) => api.post('/boletinaus', data)
boleService.updateAttendance = (data) => api.post('/attendance', data)

export default boleService