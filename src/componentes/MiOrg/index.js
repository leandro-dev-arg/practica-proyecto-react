import { useState } from "react";
import "./MiOrg.css"
const MiOrg= (props) =>{
    //hook -estado
    //useState
    //use-state()
    //uso de useState
    //const [nombreVariable, funcionActualiza]=useState(Valor inicial de variable)
    console.log(props)
    //const [mostrar, actulizarMostrar]=useState(true)
    //const manejarClick= ()=>{
    //    console.log("mostrar/ocultar elemento",!mostrar);
     //   actulizarMostrar(!mostrar)
   // }
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img  src="./img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
} 
export default MiOrg
