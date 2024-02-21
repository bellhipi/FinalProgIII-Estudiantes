function Alumno({ dni, nombre, curso, ausentes }) {
    return (
      <>
        Legajo: {dni}. Nombre: {nombre}. Curso: {curso}{'° Año'}. Inasistencias: {ausentes}.
        <br/>
      </>
    )
  }
  
  export default Alumno