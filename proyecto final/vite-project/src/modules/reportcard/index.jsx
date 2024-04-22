import { useState, useContext, React } from 'react'
//import listadoCursos from '../../data/cursos.json'
//import listadoAlumnos from '../../data/alumnos.json';
import { ApiContext } from '../../context/apiContext';
import { Select, Divider, Typography, Table, Space } from 'antd';
import Spinner from '../../components/Spinner';
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

    const { listadoCursos, getFiltrarAlumnos, alumnos, getFiltrarBoletin, boletin } = useContext(ApiContext);

    const onChange = (value) => {
        getFiltrarAlumnos(value)
        
        /* const auxcursos = listadoCursos.filter((c) => c.id === value)
        setAlumnosCurso(listadoAlumnos.filter((a) => a.curso === value))
        setMaterias(auxcursos[0].materias) */
    };

    const onChangeAlu = (value) => {
        getFiltrarBoletin(value)
       /*  const auxalumnos = listadoAlumnos.filter((a) => a.dni === value)
        setAlumnos(auxalumnos)
        crearData(auxalumnos[0].notas, materias) */
    };

    /* const crearData = (n, m) => {
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
 */
    /* useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Ejecutado despues de 5 segundos')
            setAnios(listadoCursos)
        }, 5000)
        return () => clearTimeout(timer)
    }, []); */

    return (
        <>
            <Title>
                Boletín
            </Title>

            {!listadoCursos? (
                <>
                    <Spinner />
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