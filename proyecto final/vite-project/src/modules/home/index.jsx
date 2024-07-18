import React, { useContext, useEffect } from 'react';
import Unlog from '../../components/Unlog'
import { ApiContext } from '../../context/apiContext';
import { Typography } from 'antd';
import Spinner from '../../components/Spinner';
import aluService from '../../service/alumno'
const { Title } = Typography;

const Home = () => {

  const { isUserLogged, userLogged } = useContext(ApiContext);

  useEffect(() => {
    const getAlumno = async () => {
      if (isUserLogged == 'alu') {
        await aluService.getAlumno(userLogged).then((response) => {
          console.log(response.data)
          //setListadoCursos(response.data)
        });
  
      } else { }
  
    }
    getAlumno()
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

          {userLogged ? (
            <>
              <Spinner />
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  )
};
export default Home
