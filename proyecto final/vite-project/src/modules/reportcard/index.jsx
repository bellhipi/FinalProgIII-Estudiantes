import { useState, useEffect, useContext, React } from 'react'
import curService from '../../service/curso';
import aluService from '../../service/alumno';
import boleService from '../../service/boletin';
import { Select, Divider, Typography, Table, Space } from 'antd';
import Spinner from '../../components/Spinner';
import { ApiContext } from '../../context/apiContext';
const { Title } = Typography;

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

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
    const [alumnos, setAlumnos] = useState([])
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

    const onChange = async (idalu) => {
        await aluService.getFiltrarAlumnos(idalu).then((response) => {
            setAlumnos(response.data)
        });
    };

    const onChangeAlu = async (idalu) => {
        await boleService.getFiltrarBoletin(idalu).then((response) => {
            setBoletin(response.data)
        });
    };

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
                    <Divider orientation="left">
                        <Select
                            showSearch
                            placeholder="Select a course"
                            optionFilterProp="course"
                            onChange={onChange}
                            filterOption={filterOption}
                            options={listadoCursos.map((a) => ({
                                label: `${a.id}° Año`,
                                value: a._id,
                            }))}
                        />
                    </Divider>
                    <Space
                        direction="vertical"
                        size="middle"
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Select
                            style={{
                                width: '20%',
                            }}
                            showSearch
                            placeholder="Select a student"
                            optionFilterProp="student"
                            onChange={onChangeAlu}
                            filterOption={filterOption}
                            options={alumnos.map((a) => ({
                                label: a.nombre,
                                value: a._id,
                            }))}
                        />
                        <Table dataSource={boletin} columns={columns} />
                    </Space>

                </>
            )}
        </>)
};
export default ReportCard