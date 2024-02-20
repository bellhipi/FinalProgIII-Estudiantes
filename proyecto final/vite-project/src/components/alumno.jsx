function Alumno({ dni, nombre, curso, ausentes }) {
    return (
      <li>
        Legajo: {dni}. Nombre: {nombre}. Curso: {curso}{'° Año'}. Inasistencias: {ausentes}.
      </li>
    )
  }
  
  export default Alumno