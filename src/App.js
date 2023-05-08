import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Colaborador from './componentes/Colaboradores';
import Footer from './componentes/Footer';

function App() {
  const[mostrarFormulario, actulizarMostrar]=useState(false);
  const[colaboradores,actualizarColaboradores]=useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }])

  const [equipos,actualizarEquipos]=useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278" ,
      colorSecundario:"#D9F7E9"
    },
    
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA" ,
      colorSecundario:"#E8F8FF"
    },
    {
      id:uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157" ,
      colorSecundario:"#F0F8E2"
    },
    
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69" ,
      colorSecundario:"#FDE7E8"
    },
    
    {
      id:uuid(),
      titulo:  "UX y Diseño",
      colorPrimario: "#DB6EBF" ,
      colorSecundario:"#FAE9F5"
    },
    
    {
      id:uuid(),
      titulo:  "Movil",
      colorPrimario: "#FFBA05" ,
      colorSecundario:"#FFF5D9"
    },
    {
      id:uuid(),
      titulo:  "Inovación y Gestión",
      colorPrimario: "#FF8A29" ,
      colorSecundario:"#FFEEDF"
    }
    
    
  
    ]) 



  const cambiarMostrar= ()=>{
    actulizarMostrar(!mostrarFormulario)
  }


  //registrar colaborador
  const registrarColaborador=(colaborador)=>{
    console.log("nuevo colaborador", colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores,colaborador])

  }

  //eliminar colaborador
  const eliminarColaborador= (id)=>{
    console.log("eliminar Colaborador",id)
    const nuevosColaboradores=colaboradores.filter((Colaborador)=>{
      return Colaborador.id !== id
    })
    actualizarColaboradores(nuevosColaboradores)
  }

 //actulizar color de equipo
 const actualizarColor =(color,id)=>{
    console.log("actualizar : ",color,id)
    const equiposActualizados=equipos.map((equipo)=>{
      if (equipo.id === id){
        equipo.colorPrimario=color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)

 }


 //Crear equipo
 const crearEquipo =(nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
 } 


 //funcion like

 const like= (id)=>{
  console.log("like ",id)
  const colaboradoresActualizados= colaboradores.map((colaborador) => {
    if (colaborador.id === id) {
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
 }

  //lista de equpos  
 
  return (
    <div >
      <Header />
      {/*{mostrarFormulario===true ? <Formulario />:<></>}*/}
      {mostrarFormulario && <Formulario
       equipos={equipos.map((equipo)=>{
        return equipo.titulo})}
        registrarColaborador={registrarColaborador} 
        crearEquipo={crearEquipo}
        />
        }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo)=>{
          return <Equipo datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />} )
          }

      <Footer />
    </div>
  );
}

export default App;
