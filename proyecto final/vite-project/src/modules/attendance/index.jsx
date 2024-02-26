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

    const { listadoCursos, listadoAlumnos, updateAttendance } = useContext(ApiContext);
    const [alumnos, setAlumnos] = useState([]);

    const onChange = (value) => {
        setAlumnos(listadoAlumnos.filter((a) => a.curso === value))
        console.log('onchange')
    };

    const onClick = (id, ausentes) => {
        const update = { ausentes: ausentes + 1 };
        updateAttendance(id, update)
        console.log('onclick')
        //onChange(curso)
        /* const newAlumno = alumnos.map((a) => {
            if (a.id === id) {
                return {
                    ...a,
                    ausentes: a.ausentes + 1
                };
            } else {
                return a;
            }
        });
        setAlumnos(newAlumno) */
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
            {console.log('cuerpo',listadoAlumnos)}
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
                        </Card>, <Button type="link" onClick={() => {onClick(item._id, item.ausentes)}} disabled={item.ausentes >= 190}>
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