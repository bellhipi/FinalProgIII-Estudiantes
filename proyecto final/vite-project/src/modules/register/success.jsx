import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Success = () => (
  <Result
    status="success"
    title="Usuario registrado exitosamente"
    subTitle="Para continuar inicie sesión con su usuario y contraseña."
    extra={[
      <Link to="/login">
        <Button type="primary" htmlType="submit" key="console">
          Login
        </Button>
      </Link>
    ]}
  />
);
export default Success;