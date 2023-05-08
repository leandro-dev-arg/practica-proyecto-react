import { useState } from "react";
import "./Formulario.css";
import Campo from "../campo/index";
import ListaOpciones from "../ListaOpciones/index.js";
import Boton from "../Boton/index";
const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo,actualzarEquipo]= useState("");

  const [titulo,actualizarTitulo]=useState("");
  const [color,actualizarColor]=useState("");

  const {registrarColaborador,crearEquipo}=props

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("manejarEnvio");
    let datosAenviar={
        nombre:nombre,
        puesto:puesto,
        foto:foto,
        equipo
    }
    props.registrarColaborador(datosAenviar)
  };


const manejarNuevoEquipo =(e) =>{
    e.preventDefault()
    crearEquipo({titulo,colorPrimario:color})
}

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="ingresa el nombre"
          required={true}
          valor={nombre}
          actulizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="ingresar puesto"
          required={true}
          valor={puesto}
          actulizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="ingresar enlace de foto"
          required={true}
          valor={foto}
          actulizarValor={actualizarFoto}
        />
        <ListaOpciones
         valor={equipo}
        actualzarEquipo={actualzarEquipo}
        equipos={props.equipos}
        />
        <Boton texto="crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Título"
          placeholder="ingresa el título"
          required={true}
          valor={titulo}
          actulizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="ingresar color en Hex"
          required={true}
          valor={color}
          actulizarValor={actualizarColor}
          type="color"
        />
         <Boton texto="Registrar equipo" />
      </form>
    </section>
  );
};

export default Formulario;
