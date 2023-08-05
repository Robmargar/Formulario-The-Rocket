import React,{useState, useEffect} from 'react'
import perfil from '../assets/foto Perfil.jpg'
import { Img } from './StyleImage'
import { Div1 ,DivNom, Div3, DivResp} from './StyleDiv'
import {Input, DivBad} from './StyleInput'

function Nombre({addData}) {


  const [data, setData]=useState({
    Nombre:"",
    SegundoNombre:"",
    ApellidoPaterno:"",
    ApellidoMaterno:"",
    
  });
  const[errors, setErrors]=useState({});
  const[sinerrores, setSinErrores]=useState(false);

  useEffect(() => {
    addData(data);
  },[data]);
  
  function handleOnChange(e){
    const newData={...data,
      [e.target.name]:e.target.value,
    };
    Validar(newData);
    setData(newData);
  }

  function boton(errors){
    if(Object.keys(errors).length !== 0 ){
       return false;
    }else return true;
};

  function Validar(input){
    
    let errors={};
    if(!input.Nombre || input.Nombre.length<2){
        errors.Nombre="Nombre requerido";
        // verificar si existe o no 
    }
    if(!input.ApellidoPaterno || input.ApellidoPaterno.length<3){
      errors.ApellidoPaterno="Apellido Paterno requerido";
    }

    if(!input.ApellidoMaterno || input.ApellidoMaterno.length<3 ){
      errors.ApellidoMaterno="Apellido Materno requerido";
    }
    setErrors(errors);
    setSinErrores(boton(errors));
  };


  return(
    <div>
      <Div1>
        <Img src={perfil} alt="imagen" />  
        <DivNom>
          <Div3>¿Cuál es tu nombre?</Div3> 
          <div>
            <Input type="text" placeholder= 'Nombre' name="Nombre" value={data.Nombre} required onChange={handleOnChange} />        
            {errors.Nombre && <DivBad>"{errors.Nombre}"</DivBad>}
          </div>
          <Input type="text" placeholder= 'Segundo Nombre' name="SegundoNombre" value={data.SegundoNombre} onChange={handleOnChange} />        
          <div>
            <Input type="text" placeholder= 'Apellido Paterno' name="ApellidoPaterno" value={data.ApellidoPaterno} onChange={handleOnChange} />        
            {errors.ApellidoPaterno && <DivBad>"{errors.ApellidoPaterno}"</DivBad>}
          </div>
          <div>
            <Input type="text" placeholder= 'Apellido Materno' name="ApellidoMaterno" value={data.ApellidoMaterno} onChange={handleOnChange} />                
            {errors.ApellidoMaterno && <DivBad>"{errors.ApellidoMaterno}"</DivBad>}
          </div>
          {sinerrores && <DivResp>{data.Nombre} {data.SegundoNombre} {data.ApellidoPaterno} {data.ApellidoMaterno}</DivResp>}
        </DivNom>
      </Div1>
    </div>
  )
}

export default Nombre 