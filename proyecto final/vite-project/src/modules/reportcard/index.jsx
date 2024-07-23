import { useState, useEffect, useContext, React } from 'react'
import curService from '../../service/curso';
import boleService from '../../service/boletin';
import { Typography, Table } from 'antd';
import Spinner from '../../components/Spinner';
import Edit from './edit'
import { ApiContext } from '../../context/apiContext';
const { Title } = Typography;

const columns = [
    {
        title: 'Materias',
        dataIndex: 'nombre',
        key: 'key',
    },
    {
        title: 'Notas',
        dataIndex: 'numero',
        key: 'key',
    }
];

const ReportCard = () => {

    const { isUserLogged, userLogged } = useContext(ApiContext);
    const [listadoCursos, setListadoCursos] = useState(0)
    const [boletin, setBoletin] = useState([])

    useEffect(() => {
        const getCrusos = async () => {
            if (isUserLogged == 'alu') {
                const idalu = userLogged
                await boleService.getFiltrarBoletin(idalu).then((response) => {
                    setBoletin(response.data)
                });
            } else {
                if (isUserLogged == 'doc') {
                    await curService.getNumCursos().then((response) => {
                        setListadoCursos(response.data)
                    });
                }
            }
        }
        getCrusos()
    }, [])

    return (
        <>
            <Title level={3}>
                Boletín
            </Title>

            {!listadoCursos ? (
                <>
                    {boletin.length == 0 ? (
                        <>
                            <Spinner />
                        </>
                    ) : (
                        <>
                            <Table dataSource={boletin} columns={columns} />
                        </>)}
                </>
            ) : (
                <>
                    <Edit listadoCursos={listadoCursos} />
                </>
            )}
        </>)
};
export default ReportCard