
import "./ListaOpciones.css"
const ListaOpciones=(props) =>{
//para recorrer un arreglo en react no utilizo un for, utilizo el metodo map
//metodo map =nombre del arrai o vector.map( (equipo,index) =>{
//   return <option></option>
// } )
   

        const manejarCambio = (e) =>{
            console.log("cambio",e.target.value)
            props.actualzarEquipo(e.target.value)
        }
    return <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
               {props.equipos.map( (equipos,index) =>{
                    return <option key={index} value={equipos}>{equipos}</option> 
               } )}
            </select>
           </div>
}
export default ListaOpciones
