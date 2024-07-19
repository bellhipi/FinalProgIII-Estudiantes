import { useEffect, useState, useContext, React } from 'react'
import curService from '../../service/curso';
import { Select, Divider, List, Typography } from 'antd';
import Spinner from '../../components/Spinner';
import { ApiContext } from '../../context/apiContext';
import aluService from '../../service/alumno';

const { Title } = Typography;
// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Subjects = () => {

    const { isUserLogged, userLogged } = useContext(ApiContext);
    const [listadoCursos, setListadoCursos] = useState(0)
    const [materias, setMaterias] = useState([])

    useEffect(() => {
        const getCrusos = async () => {
            if (isUserLogged == 'alu') {
                await aluService.getCursoAlumno(userLogged).then((response) => {
                    const idcur = response.data.id
                     curService.getFiltrarMateria(idcur).then((response) => {
                        setMaterias(response.data)
                    }); 
                });
            } else {
                if (isUserLogged == 'doc') {
                    await curService.getNumCursos().then((response) => {
                        setListadoCursos(response.data)
                    });
                }
            }
        }
        getCrusos()
    }, [])

    const onChange = async (idcur) => {
        console.log(idcur)
        await curService.getFiltrarMateria(idcur).then((response) => {
            setMaterias(response.data)
        })
    };

    return (
        <>
            <Title level={3}>
                Materias
            </Title>

            {!listadoCursos ? (
                <> {materias.length == 0 ? (
                    <>
                        <Spinner />
                    </>
                ) : (<></>)}
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