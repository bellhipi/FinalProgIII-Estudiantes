import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';

const Unlog = () => {
  return (
    <>

      <div align="center">
        <Card
          title="Bienvenidos"
          align="center"
          bordered={false}
          style={{
            width: 300,
            backgroundColor: '#F2F3F4'
          }}
        >
          <Button type="primary" size="large" icon={<LoginOutlined />}>
            <Link to="/login"> Iniciar Sesión </Link>
          </Button>
          <br></br>
          <br></br>
          <Button size="large" icon={<UserOutlined />}>
            <Link to="/register">  Registrarse </Link>
          </Button>
        </Card>
      </div>
    </>
  )
};
export default Unlog
