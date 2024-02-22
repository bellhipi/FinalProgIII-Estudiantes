import React from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio
} from 'antd';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const onChange = (value) => {
  console.log('changed', value);
};

const Register = () => (
  <Form
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Radio"
      name="Radio"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Radio.Group>
        <Radio value="student"> Student </Radio>
        <Radio value="teacher"> Teacher </Radio>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      label="Name"
      name="Name"
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
      name="Last Name"
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
      name="ID"
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
      onChange={onChange}
      changeOnWheel
      style={{
        width: '100%',
      }}
    />
    </Form.Item>



    <Form.Item
      label="Age"
      name="Age"
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
        onChange={onChange}
        changeOnWheel
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item
      label="Birthdate"
      name="Birthdate"
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
      name="User"
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
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default Register