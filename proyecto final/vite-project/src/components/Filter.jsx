import { useState, useEffect, React } from 'react'
import listadoCursos from '../data/cursos.json'
//import Curso from '../components/curso';
import { Select, Divider, List, Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Filter = () => {
    const [cursos, setCursos] = useState([])
    const [anios, setAnios] = useState([])
    const [materias, setMaterias] = useState([])

    const onChange = (value) => {
        //console.log(value)
        let aux = listadoCursos.filter((c) => {
        //setCursos(listadoCursos.filter((c) => { 
            //console.log(c.id)
            //console.log(value)
            //console.log(c.id === value)
            c.id === value 
            console.log(c)
        })
        console.log(aux)
        setMaterias(cursos[0].materias)
    };

    /* const logUserToBack = async (logUser) => {
        await api
          .post('/loguser', logUser)
          .then((response) => {
            if (!response.data) {
              alert('nombre de usuario o contraseña invalida, por favor intente nuevamente');
            } else {
              setUserLogged(response.data);
              navigate('/userMain', { replace: true });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }; */

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Ejecutado despues de 5 segundos')
            setAnios(listadoCursos)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {cursos.length == 0 && anios.length == 0 && materias.length == 0 ? (
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