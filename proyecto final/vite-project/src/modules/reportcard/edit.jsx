import React, { useState } from 'react';
import { Form, InputNumber, Table, Typography, Select, Divider, Space } from 'antd';
import aluService from '../../service/alumno';
import boleService from '../../service/boletin';

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const EditableCell = ({ editing, dataIndex, record, children, ...restProps }) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input!`,
            },
          ]}
        >
          <InputNumber
            min={0}
            max={10}
            keyboard={true}
            changeOnWheel
          />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Edit = ({ listadoCursos }) => {

  const [alumnos, setAlumnos] = useState([])
  const [boletin, setBoletin] = useState([])
  const [alu, setAlu] = useState(0)
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;

  const onChange = async (idalu) => {
    await aluService.getFiltrarAlumnos(idalu).then((response) => {
      setAlumnos(response.data)
    });
  };

  const onChangeAlu = async (idalu) => {
    await boleService.getFiltrarBoletin(idalu).then((response) => {
      setBoletin(response.data)
      setAlu(idalu)
    });
  };

  const edit = (record) => {
    form.setFieldsValue({
      numero: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    const update = await form.validateFields();
    const data = {alu, key, update}
    const idalu = alu
    await boleService.updateNotas(data).then((response) => {
      setEditingKey('')
      boleService.getFiltrarBoletin(idalu).then((response) => {
        setBoletin(response.data)
      });
    });
  };

  const columns = [
    {
      title: 'Materias',
      dataIndex: 'nombre',
      key: 'key',
      editable: false
    },
    {
      title: 'Notas',
      dataIndex: 'numero',
      key: 'key',
      editable: true
    },
    {
      title: 'Operación',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Divider orientation="left">
        <Select
          showSearch
          placeholder="Select a course"
          optionFilterProp="course"
          onChange={onChange}
          filterOption={filterOption}
          options={listadoCursos.map((a) => ({
            label: `${a.id}° Año`,
            value: a._id,
          }))}
        />
      </Divider>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: 'flex',
        }}
      >
        <Select
          style={{
            width: '20%',
          }}
          showSearch
          placeholder="Select a student"
          optionFilterProp="student"
          onChange={onChangeAlu}
          filterOption={filterOption}
          options={alumnos.map((a) => ({
            label: a.nombre,
            value: a._id,
          }))}
        />
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={boletin}
            columns={mergedColumns}
            rowClassName="editable-row"
            pagination={{
              onChange: cancel,
            }}
          />
        </Form>
      </Space>
    </>
  );
};
export default Edit;