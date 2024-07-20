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
          <Link to="/login">
            <Button type="primary" size="large" icon={<LoginOutlined />}>
              Iniciar Sesión
            </Button>
          </Link>
          <br></br>
          <br></br>
          <Link to="/register">
            <Button size="large" icon={<UserOutlined />}>
              Registrarse
            </Button>
          </Link>
        </Card>
      </div>
    </>
  )
};
export default Unlog
