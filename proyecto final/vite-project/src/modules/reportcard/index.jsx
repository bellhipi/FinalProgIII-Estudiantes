import { useState, useEffect, React } from 'react'
import listadoCursos from '../../data/cursos.json'
import listadoAlumnos from '../../data/alumnos.json';
import { Select, Divider, Typography, Flex, Spin, Table, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const { Title } = Typography;

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const columns = [
    {
        title: 'Materias',
        dataIndex: 'materia',
        key: 'materia',
    },
    {
        title: 'Notas',
        dataIndex: 'nota',
        key: 'nota',
    }
];

const ReportCard = () => {

    const [alumnos, setAlumnos] = useState([]);
    const [alumnosCurso, setAlumnosCurso] = useState([]);
    const [anios, setAnios] = useState([]);
    const [materias, setMaterias] = useState([]);
    const [data, setData] = useState([]);

    const onChange = (value) => {
        const auxcursos = listadoCursos.filter((c) => c.id === value)
        setAlumnosCurso(listadoAlumnos.filter((a) => a.curso === value))
        setMaterias(auxcursos[0].materias)
    };

    const onChangeAlu = (value) => {
        const auxalumnos = listadoAlumnos.filter((a) => a.dni === value)
        setAlumnos(auxalumnos)
        crearData(auxalumnos[0].notas, materias)
    };

    const crearData = (n, m) => {
        let aux = [];
        for (let i = 0; i < m.length; i++) {
            aux[i] = {
                key: `${i + 1}`,
                materia: m[i],
                nota: n[i]
            }
        }

        console.log('data', aux)
        setData(aux)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Ejecutado despues de 5 segundos')
            setAnios(listadoCursos)
        }, 5000)
        return () => clearTimeout(timer)
    }, []);

    return (
        <>
            <Title>
                Boletín
            </Title>

            {materias.length == 0 && alumnos.length == 0 && anios.length == 0 ? (
                <>
                    <Flex gap="large" vertical>
                        <Spin
                            indicator={
                                <LoadingOutlined
                                    style={{
                                        fontSize: 24,
                                    }}
                                    spin />
                            }
                        />
                    </Flex>
                    <br />
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
                            options={anios.map((a) => ({
                                label: `${a.id}° Año`,
                                value: a.id,
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
                            options={alumnosCurso.map((a) => ({
                                label: a.nombre,
                                value: a.dni,
                            }))}
                        />
                        <Table dataSource={data} columns={columns} />
                    </Space>

                </>
            )}
        </>)
};
export default ReportCard