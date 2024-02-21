import { useState, useEffect, React } from 'react'
import listadoCursos from '../../data/cursos.json';
import Curso from '../../components/curso';
import Anio from '../../components/anio';
import { Select, Divider, List, Typography, Button, Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const { Title } = Typography;
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const App = () => {

  const [cursos, setCursos] = useState([])
  const [anios, setAnios] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Ejecutado despues de 5 segundos')
      setCursos(listadoCursos)
      setAnios(listadoCursos)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])


  const onFilterClick = () => {
    if (!isFiltered) {
      setAlumnos(listadoCursos.filter((c) => c.id == 1))
    } else {
      setAlumnos(listadoCursos)
    }
    setIsFiltered((isFiltered) => !isFiltered)
  }

  return (
    <>
      <Title>
        Materias
      </Title>

      {cursos.length == 0 && anios.length == 0 ? (
        <>
         <Flex gap="large" vertical>
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 24,
                }}
                spin/>
             }
          />
           </Flex>
           <br/>
        </>

      ) : (
        <>

          <Divider orientation="left">
            <Select
              showSearch
              placeholder="Select a course"
              optionFilterProp="course"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}

              //tratando de mostrar las opciones directo de la info del json
              options={anios.map((a) => ({
                label: a,
                value: a,
              }))}
            />
          </Divider>


          {
            //fuera del select lo pude hacer sin problema
            anios.map((a) => (
              <Anio key={a.id} {...a} />
            ))}

          <div>
            <Button type="primary" onClick={() => onFilterClick()}>
              {
                //el boton no detecta el onclick
                isFiltered ? 'Quitar filtro' : 'Filtrar'} curso 1
            </Button>
          </div>




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
    </>
  )
};
export default App;