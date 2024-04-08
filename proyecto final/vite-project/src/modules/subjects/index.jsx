import { useContext, useState, React } from 'react'
//import listadoCursos from '../data/cursos.json'
import { ApiContext } from '../../context/apiContext';
import { Select, Divider, List, Typography } from 'antd';
import Spinner from '../../components/Spinner';

const { Title } = Typography;
// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Subjects = () => {
  const { listadoCursos, materias, getFiltrarMateria } = useContext(ApiContext);

  const onChange = (value) => {
    getFiltrarMateria(value)
        /* console.log(value)
      const auxcursos = listadoCursos.filter((c) => c.id === value)
      setMaterias(auxcursos[0].materias) */
  };
    /* useEffect(() => {
         const timer = setTimeout(() => {
            console.log('Ejecutado despues de 5 segundos')
             console.log('listadocursos filter',listadoCursos)
            //setAnios(listadoCursos)
        }, 5000)
        return () => clearTimeout(timer) 
    }, []) */
  return(
    <>
      <Title>
        Materias
      </Title>
      
      {!listadoCursos ? (
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
};
export default Subjects