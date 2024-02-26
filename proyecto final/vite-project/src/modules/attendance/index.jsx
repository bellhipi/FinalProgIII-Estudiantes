import { useState, useContext, React } from 'react'
//import listadoCursos from '../../data/cursos.json'
//import listadoAlumnos from '../../data/alumnos.json';
import { ApiContext } from '../../context/apiContext';
import { Select, Divider, List, Typography, Card, Button } from 'antd';
import Spinner from '../../components/Spinner';
const { Title } = Typography;

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const Attendance = () => {

    const { listadoCursos, listadoAlumnos } = useContext(ApiContext);
    const [alumnos, setAlumnos] = useState([]);

    const onChange = (value) => {
        setAlumnos(listadoAlumnos.filter((a) => a.curso === value))
    };

    const onClick = (value) => {
        const newAlumno = alumnos.map((a) => {
            if (a.dni === value) {
                return {
                    ...a,
                    ausentes: a.ausentes + 1
                };
            } else {
                return a;
            }
        });
        setAlumnos(newAlumno)
    };

/*     useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Ejecutado despues de 5 segundos')
            setAnios(listadoCursos)
        }, 5000)
        return () => clearTimeout(timer)
    }, []);
 */
    return (
        <>
            <Title>
                Asistencia
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
                dataSource={alumnos}
                renderItem={(item, index) => (

                    <List.Item
                        actions={[<Card size="small" style={{ width: 75 }}>
                            <p>{item.ausentes}</p>
                        </Card>, <Button type="link" onClick={() => onClick(item.dni)} disabled={item.ausentes >= 190}>
                            ausente
                        </Button>]
                        }
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
            <br/>
            <b>Cantidad total de alumnos: {alumnos.length}</b>
        </>)
};
export default Attendance