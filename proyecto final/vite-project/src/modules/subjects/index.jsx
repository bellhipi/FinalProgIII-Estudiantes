import { React } from 'react'
import { Typography} from 'antd';
import Filter from '../../components/Filter'
import { ApiProvider } from '../../provider/apiProvider'
const { Title } = Typography;


const Subjects = () => {
  return(
    <>
      <Title>
        Materias
      </Title>
      <ApiProvider>
      <Filter/>
      </ApiProvider>
    </>)
};
export default Subjects