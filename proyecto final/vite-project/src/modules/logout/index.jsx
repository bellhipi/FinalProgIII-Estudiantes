import React, {useContext} from 'react';
import { Card, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { ApiContext } from '../../context/apiContext';
import { Link } from 'react-router-dom';

const Logout = () => {

    const { setIsUserLogged, setUserLogged } = useContext(ApiContext);

    const onClick = () => {
        setIsUserLogged(0)
        setUserLogged(0)
      };

  return (
    <>

      <div align="center">
        <Card
          title="Cerrar sesión"
          align="center"
          bordered={false}
          style={{
            width: 300,
            backgroundColor: '#F2F3F4'
          }}
        >
          <Button type="primary" size="large" onClick={onClick} icon={<LogoutOutlined />}>
          <Link to="/"> Logout </Link>
          </Button>
        </Card>
      </div>
    </>
  )
};
export default Logout