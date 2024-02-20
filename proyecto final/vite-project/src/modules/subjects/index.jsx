import React from 'react';
import { Select, Divider, List, Typography } from 'antd';
const { Title } = Typography;
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];



const App = () => (
  <>
    <Title>
      Materias
    </Title>
   
    <Divider orientation="left">
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
          {
            value: 1,
            label: "1° Año",
          },
          {
            value: 2,
            label: "2° Año",
          },
          {
            value: 3,
            label: "3° Año",
          },
          {
            value: 4,
            label: "4° Año",
          },
          {
            value: 5,
            label: "5° Año",
          }
        ]}
      />
    </Divider>
    <List
      size="large"
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
);
export default App;