import { useEffect, useState } from 'react'
import Nombre from './components/Nombre'
import FechaNacimiento from './components/fechaNacimiento'
import DatosContacto from './components/datosContacto'
import Header from './components/header'
import { Div4} from './components/StyleDiv'
import { Button } from './components/StyleButton'
import { DivGen, DivResp2 } from './components/StyleDiv'
import { gql, useMutation } from "@apollo/client"


function App() {

  const [Persona, setPersona]=useState({
    Nombre:"",
    SegundoNombre:"",
    ApellidoPaterno:"",
    ApellidoMaterno:"",
    Dia:"",
    Mes:"",
    Año:"",
    Correo:"",
    Telefono:""
  });
  const[terminado, setTerminado]=useState(false);

  const CREATE_PERSON=gql`
  mutation createPerson(
    $Nombre:String!,
    $SegundoNombre:String,
    $ApellidoPaterno: String!,
    $ApellidoMaterno: String!,
    $fechaNacimiento: String!,
    $Correo:String!,
    $Telefono:String!){
    addPerson(
    Nombre: $Nombre
    SegundoNombre: $SegundoNombre
    ApellidoPaterno: $ApellidoPaterno
    ApellidoMaterno: $ApellidoMaterno
    fechaNacimiento: $fechaNacimiento
    Correo: $Correo
    Telefono: $Telefono
    ){
      Nombre
      ApellidoPaterno
      ApellidoMaterno
      fechaNacimiento
      Correo
      Telefono
    }
  }`
  

    function crearPer(){
    const Nombre=Persona.Nombre;
    const SegundoNombre=Persona.SegundoNombre;
    const ApellidoPaterno=Persona.ApellidoPaterno;
    const ApellidoMaterno=Persona.ApellidoMaterno;
    const fechaNacimiento=(Persona.Dia+ Persona.Mes + Persona.Año);
    const Correo=Persona.Correo;
    const Telefono=Persona.Telefono
    console.log( Nombre, SegundoNombre,FechaNacimiento,Correo);
    createPerson({variables: {Nombre, SegundoNombre, ApellidoPaterno, ApellidoMaterno, fechaNacimiento, Correo, Telefono}})
  }

  
  
    const addData = (data)=>{
    const newPersona={
      ...Persona,
      ...data
    }
    setPersona(newPersona)
  };
  
  const showResume=()=>{
    setTerminado(true);
    crearPer(); 
  };
  const [createPerson]=useMutation(CREATE_PERSON)
  
  return (
    <>
      <DivGen>
        <div>
         
        </div>
        <Div4>
        <Header/>
            <Nombre addData={addData} />
            <FechaNacimiento addData={addData}/>
            <DatosContacto addData={addData}/>
            {Persona.Nombre.length>2&&Persona.ApellidoMaterno.length>4 &&Persona.Telefono.length===10 && <Button onClick={showResume }>Iniciar</Button>}
            {terminado&& <DivResp2>
              <div>{Persona.Nombre} {Persona.SegundoNombre} {Persona.ApellidoPaterno} {Persona.ApellidoMaterno}</div>
              <div>{Persona.Dia} {Persona.Mes} {Persona.Año} </div>
              <div> Email: {Persona.Correo}</div>
              <div> Teléfono {Persona.Telefono}</div>
              </DivResp2> }
        </Div4>
      </DivGen>
    </>
  )
}

export default App
