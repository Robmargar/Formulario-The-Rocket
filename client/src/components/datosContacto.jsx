import React,{useEffect, useState} from 'react'
import perfil from '../assets/foto Perfil.jpg'
import { Img } from './StyleImage'
import { Div1 ,DivDat, Div3, DivResp} from './StyleDiv'
import {Input,DivBad} from './StyleInput'

function DatosContacto({addData}) {
  const [data, setData]=useState({
    Correo:"",
    Telefono:"",  
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
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


    let errors={};

    if( !validEmail.test(input.Correo) ){
      errors.Correo="Correo no valido";
    }

    if(input.Telefono.length<10 ){
        errors.Telefono="Longitud de teléfono no valida"
    }
    setErrors(errors);
    setSinErrores(boton(errors));
};
  return (
    <Div1>
       <Img src={perfil} alt="imagen" />  
       <DivDat>
        <Div3>Datos de Contacto</Div3>
        <div>
          <Input type="email" placeholder= 'Correo electrónico' name="Correo" value={data.Correo} onChange={handleOnChange}/>   
          {errors.Correo && <DivBad>"{errors.Correo}"</DivBad>}
        </div>
        <div>
          <Input type="number" placeholder= 'Telefono' name="Telefono" value={data.Telefono} onChange={handleOnChange}/>   
          {errors.Telefono && <DivBad>"{errors.Telefono}"</DivBad>}
        </div>
        {sinerrores && <DivResp><div>Email:   {data.Correo}</div> <div>Teléfono celular: {data.Telefono}|</div></DivResp>}
       </DivDat>
    </Div1>
  )
}

export default DatosContacto