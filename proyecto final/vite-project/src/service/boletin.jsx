import api from '../service/api'

const boleService = {}

boleService.getFiltrarBoletin = (idalu) => api.get(`/boletin/${idalu}`)
boleService.getFiltrarAlumnoAusente = (userLogged) => api.get(`/boletinaluaus/${userLogged}`)
boleService.getFiltrarAusentes = (idcur) => api.get(`/boletinaus/${idcur}`)
boleService.updateAttendance = (data) => api.post('/attendance', data)
boleService.altaBoletin = (values) => api.post('/boletinalta', values)

export default boleService