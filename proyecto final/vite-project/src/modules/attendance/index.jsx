import { useState, useEffect, useContext, React } from 'react'
import curService from '../../service/curso';
import boleService from '../../service/boletin';
import { Select, Divider, List, Typography, Card, Button } from 'antd';
import Spinner from '../../components/Spinner';
import { ApiContext } from '../../context/apiContext';
const { Title } = Typography;

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Attendance = () => {

    const { isUserLogged, userLogged } = useContext(ApiContext);
    const [alumnos, setAlumnos] = useState([])
    const [listadoCursos, setListadoCursos] = useState(0)

    useEffect(() => {
        const getCrusos = async () => {
            if (isUserLogged == 'alu') {
                boleService.getFiltrarAlumnoAusente(userLogged).then((response) => {
                    setAlumnos(response.data)
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
        await boleService.getFiltrarAusentes(idcur).then((response) => {
            setAlumnos(response.data)
        });
    };

    const onClick = async (idalu, ausentes, idcur) => {
        const update = { ausentes: ausentes + 1 }
        const data = { idalu, update }
        await boleService.updateAttendance(data).then((response) => {
        });
        boleService.getFiltrarAusentes(idcur).then((response) => {
            setAlumnos(response.data)
        });
    };

    return (
        <>
            <Title level={3}>
                Asistencia
            </Title>

            {!listadoCursos ? (
                <>
                    {alumnos.length == 0 ? (
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
                                value: a._id,
                            }))}
                        />
                    </Divider>
                </>
            )}
            {isUserLogged == 'doc' ? (
                <>
                    <List
                        size="large"
                        bordered
                        itemLayout="horizontal"
                        dataSource={alumnos}
                        renderItem={(item, index) => (
                            <List.Item
                                actions={[
                                    <Card size="small" style={{ width: 75 }}>
                                        <p>{item.ausentes}</p>
                                    </Card>,
                                    <Button type="link" onClick={() => { onClick(item._id, item.ausentes, item.curso) }} disabled={item.ausentes >= 190}>
                                        ausente
                                    </Button>
                                ]}
                            >
                                <List.Item.Meta
                                    key={index}
                                    title={item.nombre}
                                    description={item.dni}
                                />
                                <div>Inasistencias:</div>
                            </List.Item>
                        )}
                    />
                    <br />
                    <b>Cantidad total de alumnos: {alumnos.length}</b>
                </>
            ) : (<>
                <List
                    size="large"
                    bordered
                    itemLayout="horizontal"
                    dataSource={alumnos}
                    renderItem={(item, index) => (
                        <List.Item
                            actions={[
                                <Card size="small" style={{ width: 75 }}>
                                    <p>{item.ausentes}</p>
                                </Card>
                            ]}
                        >
                            <List.Item.Meta
                                key={index}
                                title={item.nombre}
                                description={item.dni}
                            />
                            <div>Inasistencias:</div>
                        </List.Item>
                    )}
                />
            </>)}
        </>)
};
export default Attendance