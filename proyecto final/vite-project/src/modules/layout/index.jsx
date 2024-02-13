import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Image, Divider, Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));
/*
function getItem(label, key, icon, children) {
    return {
        key,
//        icon,
//        children,
        label,
    }
}

const items = [
    getItem(<Link to="/"> Home </Link>, '1', <HomeOutlined />),
//    getItem(<Link to="/students"> Alumnos </Link>, '2', <HomeOutlined />),
];
*/
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