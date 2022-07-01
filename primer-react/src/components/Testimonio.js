import React from "react";

function Testimonio() {
return (
<div className='contenedor-testiomnio'>
<img 
className='imagen-testimonio'
src={require('../imagenes/Estudiante-2.jpg')}
alt="Foto de estudiante"/>

<div className='contenedor-texto-testimonio'>
  <p className="nombre-testimonio">Estudiante en Suecia</p>
  <p className="cargo-testimonio">Ingeniero Spotify</p>
  <p className="texto-testimonio">Esto es solo una prueba</p>
</div>
</div>

);

}


export default Testimonio;