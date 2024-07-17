import React, { useState } from 'react';
import { Typography, Button, DatePicker, Form, Input, InputNumber, Radio, Card, Result } from 'antd';
import { Link } from 'react-router-dom';
import aluService from '../../service/alumno';
import boleService from '../../service/boletin';
import docService from '../../service/docente';
import Success from './success';
const { Text } = Typography;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

const Register = () => {

  const [value, setValue] = useState(1);
  const [respuesta, setRespuesta] = useState('');

  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    setRespuesta('')
  };

  const onFinish = async (values) => {
    if (values.radio) {
      await aluService.altaAlumno({ values }).then((response) => {
        setRespuesta(response.data),
          response.data == 'Alumno registrado exitosamente' ? (
            console.log('antes de boletin', response.data),
            boleService.altaBoletin({ values }).then((response) => {
              console.log('boletin creado')
            })
          ) : (
            console.log('respuesta vacía', response.data)
          )
      })
    } else {
      await docService.altaDocente({ values }).then((response) => {
        console.log('respuesta',response.data)
        setRespuesta(response.data)
      })
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {respuesta.includes('registrado exitosamente') ? (
        <Success />
      ) : (
        respuesta.includes('nombre de usuario') ? (
          <Result
            status="warning"
            title="Usuario existente"
            subTitle={respuesta}
            extra={[
              <Button type="primary" key="console">
                <Link to="/login"> Ligin </Link>
              </Button>,
              <Button key="buy" onClick={onClick}> Back to register </Button>,
            ]}
          />
        ) : (
          <div align="center">
            <Card
              title="Registrarse"
              align="center"
              bordered={false}
              style={{
                width: 500,
                backgroundColor: '#F2F3F4'
              }}
            >

              <Form
                {...formItemLayout}
                variant="filled"
                style={{
                  maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Radio"
                  name="radio"
                  rules={[
                    {
                      required: true,
                      message: 'Please input!',
                    },
                  ]}
                >
                  <Radio.Group onChange={onChangeRadio} value={value}>
                    <Radio value={true}> Student </Radio>
                    <Radio value={false}> Teacher </Radio>
                  </Radio.Group>

                </Form.Item>

                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>


                <Form.Item
                  label="ID"
                  name="id"
                  rules={[
                    {
                      required: true,
                      message: 'Please input!',
                    },
                  ]}
                >
                  <InputNumber
                    min={10000000}
                    max={99999999}
                    keyboard={true}
                    changeOnWheel
                    style={{
                      width: '100%',
                    }}
                  />
                </Form.Item>



                <Form.Item
                  label="Age"
                  name="age"
                  rules={[
                    {
                      required: true,
                      message: 'Please input!',
                    },
                  ]}
                >
                  <InputNumber
                    min={1}
                    max={100}
                    keyboard={true}
                    changeOnWheel
                    style={{
                      width: '100%',
                    }}
                  />
                </Form.Item>

                <Form.Item
                  label="Birthdate"
                  name="birthdate"
                  rules={[
                    {
                      required: true,
                      message: 'Please input!',
                    },
                  ]}
                >
                  <DatePicker style={{
                    width: '100%',
                  }} />
                </Form.Item>

                {respuesta == 'Nombre de usuario existente!' ? (

                  <Form.Item
                    label="User"
                    validateStatus="error"
                    help={respuesta}
                    name="user"
                    rules={[
                      {
                        required: true,
                        message: 'Please input!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                ) : (
                  <Form.Item
                    label="User"
                    name="user"
                    rules={[
                      {
                        required: true,
                        message: 'Please input!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                )}

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

                <Form.Item
                  wrapperCol={{
                    xs: { span: 24 },
                    sm: { span: 24 }
                  }}>

                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        )
      )}
    </>)
};
export default Register