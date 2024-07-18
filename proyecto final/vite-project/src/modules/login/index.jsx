import React, { useState, useContext } from 'react';
import { Card, Button, Form, Input, Radio, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/apiContext';
import aluService from '../../service/alumno';
import docService from '../../service/docente';
import Home from '../home';

const Login = () => {
  const { setIsUserLogged } = useContext(ApiContext);
  const [value, setValue] = useState(1);
  const [respuesta, setRespuesta] = useState('');

  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };

  const onFinish = async (values) => {
    if (values.radio) {
      await aluService.loginAlumno({ values }).then((response) => {
        console.log('respuesta', response.data)
        setRespuesta(response.data)
        setIsUserLogged('alu')

      })
    } else {
      await docService.loginDocente({ values }).then((response) => {
        console.log('respuesta', response.data)
        setRespuesta(response.data)
        setIsUserLogged('doc')
      })
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {(respuesta != 'Contraseña incorrecta!' && respuesta != 'Usuario no registrado!' && respuesta != '') ? (
        <Home />
      ) : (
        <div align="center">
          <Card
            title="Iniciar Sesión"
            align="center"
            bordered={false}
            style={{
              width: 300,
              backgroundColor: '#F2F3F4'
            }}
          >

            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                align="center"
                label=""
                name="radio"
                rules={[
                  {
                    required: true,
                    message: 'Please input!',
                  },
                ]}
              >
                <Radio.Group onChange={onChangeRadio} value={value}>
                  <Radio.Button value={true}>Student</Radio.Button>
                  <Radio.Button value={false}>Teacher</Radio.Button>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              {respuesta == 'Contraseña incorrecta!' ? (

                <Form.Item
                  label="Password"
                  validateStatus="error"
                  help={respuesta}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              ) : (
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              )}

              <Form.Item
                wrapperCol={{
                  xs: { span: 24 },
                  sm: { span: 24 }
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              {respuesta == 'Usuario no registrado!' ? (
                <>
                  <Alert message={respuesta} type="error" showIcon />
                  <br />
                  <Link to="/register"> Registrarse </Link>
                </>
              ) : (<></>)}

            </Form>
          </Card>
        </div >
      )}
    </>)
};
export default Login