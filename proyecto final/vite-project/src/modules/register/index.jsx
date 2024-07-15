import React, { useState } from 'react';
import { Typography, Button, DatePicker, Form, Input, InputNumber, Radio } from 'antd';
import aluService from '../../service/alumno';
import boleService from '../../service/boletin';
const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
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

  const onFinish = async (values) => {
     if (values.radio) {
      await aluService.altaAlumno({ values }).then((response) => {
        setRespuesta(response.data);
      }),
      respuesta == 'Alumno registrado exitosamente' ? (
          await boleService.altaBoletin({ values })
        ) : (console.log(respuesta))
    } else {
      console.log('teacher')
    } 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>

      <Title>
        Registrarse
      </Title>

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
          <DatePicker />
        </Form.Item>

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
            offset: 6,
            span: 16,
          }}>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <br></br>
          <br></br>
          <Text strong type="success">{respuesta}</Text>
        </Form.Item>
      </Form>

    </>)
};
export default Register