import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Success = () => (
  <Result
    status="success"
    title="Usuario registrado exitosamente"
    subTitle="Para continuar inicie sesión con su usuario y contraseña."
    extra={[
      <Button type="primary" htmlType="submit" key="console">
        <Link to="/login"> Ligin </Link>
      </Button>,
    ]}
  />
);
export default Success;