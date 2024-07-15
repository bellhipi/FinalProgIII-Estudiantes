import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Image, Divider, Col, Row } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import {
    HomeOutlined,
    LoginOutlined,
    LogoutOutlined,
    ScheduleOutlined,
    ProfileOutlined,
    ReadOutlined,
    UserOutlined
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
    getItem(<Link to="/attendance"> Attendance </Link>, '2', <ScheduleOutlined />),
    getItem(<Link to="/reportcard"> Report Card </Link>, '3', <ProfileOutlined />),
    getItem(<Link to="/subjects"> Subjects </Link>, '4', <ReadOutlined />),
    getItem(<Link to="/register">  Register </Link>, '5', <UserOutlined />),
    getItem(<Link to="/login"> Login </Link>, '6', <LoginOutlined />),
    getItem(<Link to="/*"> Logout </Link>, '7', <LogoutOutlined />),
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
                    defaultSelectedKeys={['1']}
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
                        margin: '25px 0',
                    }}
                >
                    
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
export default App