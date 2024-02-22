import { useState, useEffect, React } from 'react'
import listadoCursos from '../../data/cursos.json'
import listadoAlumnos from '../../data/alumnos.json';
import { Select, Divider, List, Typography, Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const { Title } = Typography;

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Attendance = () => {

    const [alumnos, setAlumnos] = useState([]);
    const [anios, setAnios] = useState([])

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setAlumnos(listadoAlumnos.filter((a) => a.curso == value))
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
                Asistencia
            </Title>

            {alumnos.length == 0 && anios.length == 0 ? (
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
                </>
            )}

            <List
                size="large"
                bordered
                itemLayout="horizontal"
                dataSource={alumnos}
                renderItem={(item, index) => (

                    <List.Item>
                        <List.Item.Meta
                            key={index}
                            title={item.nombre}
                            description={item.dni}
                        />
                    </List.Item>
                )}
            />

            <p>Cantidad total de alumnos: {alumnos.length}</p>
        </>)
};
export default Attendance