import { useState, useEffect, React } from 'react'
import listadoCursos from '../data/cursos.json'
import Curso from '../components/curso';
import { Select, Divider, List, Typography, Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const { Title } = Typography;


// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Filter = () => {
    const [cursos, setCursos] = useState([])
    const [anios, setAnios] = useState([])

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setCursos(listadoCursos.filter((c) => c.id == value))
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Ejecutado despues de 5 segundos')
            setAnios(listadoCursos)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {cursos.length == 0 && anios.length == 0 ? (
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
                dataSource={cursos.map((c) => (
                    <Curso key={c.id} {...c} />
                ))}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </>)
}
export default Filter