import React, { useContext, useEffect, useState } from 'react';
import Unlog from '../../components/Unlog'
import { ApiContext } from '../../context/apiContext';
import { Typography } from 'antd';
import Spinner from '../../components/Spinner';
import aluService from '../../service/alumno';
import docService from '../../service/docente';
const { Title, Text } = Typography;

const Home = () => {

  const { isUserLogged, userLogged } = useContext(ApiContext);
  const [datos, setDatos] = useState(0)

  useEffect(() => {
    const getUser = async () => {
      if (isUserLogged == 'alu') {
        await aluService.getAlumno(userLogged).then((response) => {
          setDatos(response.data)
        });
      } else {
        if (isUserLogged == 'doc') {
          await docService.getDocente(userLogged).then((response) => {
            setDatos(response.data)
          });
        }
      }
    }
    getUser()
  }, [])



  return (
    <>
      {!isUserLogged ? (
        <Unlog />
      ) : (
        <>
          <Title level={3}>
            Datos de usuario
          </Title>

          {!datos ? (
            <>
              <Spinner />
            </>
          ) : (
            <>
              <Title level={5} italic>{datos.nombre}</Title>
              <p><Text strong>DNI: </Text>{datos.dni}</p>
              <p><Text strong>Nombre de suario: </Text>{datos.user}</p>
              <p><Text strong>Contraseña: </Text>{datos.password}</p>
              <p><Text strong>Edad: </Text>{datos.age}</p>
              <p><Text strong>Fecha de nacimiento: </Text>{datos.fnac}</p>
            </>
          )}
        </>
      )}
    </>
  )
};
export default Home
