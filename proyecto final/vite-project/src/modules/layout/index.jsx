import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Image, Divider, Col, Row } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import {
    HomeOutlined,
    LoginOutlined,
    FileProtectOutlined,
    ProfileOutlined,
    ReadOutlined,
    FormOutlined
  } from '@ant-design/icons'
const { Header, Content, Footer } = Layout;

function getItem(label, key, icon) {
    return {
      key,
      icon,
      label,
    }
  }
  
  const items = [
    getItem(<Link to="/"> Home </Link>, '1', <HomeOutlined />),
    getItem(<Link to="/login"> Login </Link>, '2', <LoginOutlined />),
    getItem(<Link to="/*"> Attendance </Link>, '3', <FileProtectOutlined />),
    getItem(<Link to="/*"> Report Card </Link>, '4', <ProfileOutlined />),
    getItem(<Link to="/subjects"> Subjects </Link>, '5', <ReadOutlined />),
    getItem(<Link to="/register">  Register </Link>, '6', <FormOutlined />),
  ];

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const App = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>

            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />

            </Header>

            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Login</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >

                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <Row justify="start" align="middle">
                            <Col flex="20px">
                                <Image
                                    width={250}
                                    src="./src/assets/utn.jpeg"
                                /></Col>
                            <Col flex="auto"></Col>
                            <Col flex="20px">
                                <Image
                                    width={200}
                                    src="./src/assets/SixAca.jpg"
                                /></Col>
                        </Row>
                    </Image.PreviewGroup>

                    <Divider />

                    <Outlet />
                </div>
            </Content>

            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                SixAcá ©{new Date().getFullYear()} Created by María Belén Hipólito
            </Footer>
        </Layout>
    );
};
export default App;