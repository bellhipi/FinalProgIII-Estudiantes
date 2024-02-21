import { useState, useEffect } from 'react'
import listadoAlumnos from '../../data/alumnos.json';
import Alumno from '../../components/alumno';
import { Typography } from 'antd';
const { Title } = Typography;



const App = () => {
  const [alumnos, setAlumnos] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Ejecutado despues de 5 segundos')
      setAlumnos(listadoAlumnos)
    }, 5000)
    return () => clearTimeout(timer)
  }, []);

  return (
    <>
      <Title>
        Bienvenidos
      </Title>
      {alumnos.length == 0 ? (
        <p>Cargando...</p>
      ) : (
        <>

          {alumnos.map((a) => (
            <Alumno key={a.dni} {...a} />
          ))}


        </>

      )}
      <p>Cantidad total de alumnos: {alumnos.length}</p>
    </>
  )
};
export default App;
