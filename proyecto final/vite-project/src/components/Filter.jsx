import { useContext, useState, useEffect, React } from 'react'
//import listadoCursos from '../data/cursos.json'
import { ApiContext } from '../context/apiContext';
import { Select, Divider, List, Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Filter = () => {
    const { listadoCursos } = useContext(ApiContext);
    const [anios, setAnios] = useState([])
    const [materias, setMaterias] = useState([])

    const onChange = async (value) => {
        const auxcursos = listadoCursos.filter((c) => c.id === value)
        setMaterias(auxcursos[0].materias)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            getCursos()
            console.log('Ejecutado despues de 5 segundos')
            setAnios(listadoCursos)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        {console.log(listadoCursos)}
            {anios.length === 0 && materias.length === 0 ? (
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
                dataSource={materias}
                renderItem={(item) => (
                    <List.Item>{item}</List.Item>)}
            />
        </>)
}
export default Filter