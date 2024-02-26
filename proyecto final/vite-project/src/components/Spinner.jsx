import { React } from 'react'
import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Spinner = () => {
    return (
        <>
            <Flex gap="large" vertical>
                <Spin
                    indicator={
                        <LoadingOutlined
                            style={{
                                fontSize: 24,
                            }}
                            spin />
                    }
                />
            </Flex>
            <br />
        </>)
}
export default Spinner