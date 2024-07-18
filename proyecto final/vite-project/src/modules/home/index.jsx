import React, { useContext } from 'react';
import Unlog from '../../components/Unlog'
import { ApiContext } from '../../context/apiContext';

const Home = () => {

  const { isUserLogged } = useContext(ApiContext);

  return (
    <>
      {isUserLogged == '' ? (
        <Unlog />
      ) : (
        <></>
      )}
    </>
  )
};
export default Home
