import { useEffect, useState, React } from 'react'
import curService from '../../service/curso';
import { Select, Divider, List, Typography } from 'antd';
import Spinner from '../../components/Spinner';

const { Title } = Typography;
// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Subjects = () => {

    const [listadoCursos, setListadoCursos] = useState(0)
    const [materias, setMaterias] = useState([])

    useEffect(() => {
        const NumCursos = async () => {
            await curService.getNumCursos().then((response) => {
                setListadoCursos(response.data)
            });
        }
        NumCursos()
    }, [])

    const onChange = async (idcur) => {
        const data = { idcur }
        await curService.getFiltrarMateria(data).then((response) => {
            setMaterias(response.data)
        })
    };
    
    return (
        <>
            <Title>
                Materias
            </Title>

            {!listadoCursos ? (
                <>
                    <Spinner />
                </>
            ) : (
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
                                value: a.id,
                            }))}
                        />
                    </Divider>
                </>
            )}

            <List
                size="large"
                bordered
                itemLayout="horizontal"
                dataSource={materias}
                renderItem={(item) => (
                    <List.Item>{item}</List.Item>)}
            />

        </>)
};
export default Subjects