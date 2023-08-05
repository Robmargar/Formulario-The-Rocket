import React,{useState, useEffect} from 'react'
import perfil from '../assets/foto Perfil.jpg'
import { Img } from './StyleImage'
import { Div1 ,DivFecha, Div3,DivResp} from './StyleDiv'
import {Input, DivBad} from './StyleInput'

function FechaNacimiento({addData}) {
  const [data, setData]=useState({
    Dia:"",
    Mes:"",
    Año:""
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
    if(input.Dia<1 || input.Dia>31 ){
        errors.Dia="Dia no valido";
        // verificar si existe o no 
    }
    if(input.Mes.length<0 ){
        errors.Mes="Selecciona un mes"
    }
    if(Number(input.Año)>2020){
      errors.Año="Año no valido"
  }
    setErrors(errors);
    setSinErrores(boton(errors));
};

  return (
    <Div1 >
        <Img src={perfil} alt="imagen" />  
        <DivFecha>
        <Div3>¿Cuál es tu fecha de nacimiento?</Div3>  
        <div>
          <Input type="text" placeholder= 'Día' name="Dia"  min="1" max="31" value={data.Dia} onChange={handleOnChange}/>        
        {errors.Dia && <DivBad>"{errors.Dia}"</DivBad>}
        </div>
        <div>
          <Input type="select" placeholder= 'Mes' name="Mes" value={data.Mes} list="Months" onChange={handleOnChange} />
          <datalist id="Months">
            <option >Enero</option>
            <option >Febrero</option>
            <option >Marzo</option>
            <option >Abril</option>
            <option >Mayo</option>
            <option >Junio</option>
            <option >Julio</option>
            <option >Agosto</option>
            <option >Septiembre</option>
            <option >Octubre</option>
            <option >Noviembre</option>
            <option >Diciembre</option>
          </datalist>       
          {errors.Mes && <DivBad>"{errors.Mes}"</DivBad>}
        </div>
        <div>
          <Input type="number" placeholder= 'Año' name="Año"  min="1920" max="2020" value={data.Año} onChange={handleOnChange} />  
          {errors.Año && <DivBad>"{errors.Año}"</DivBad>}
        </div>
        {data.Dia&&data.Mes&&data.Año && <DivResp>{data.Dia} {data.Mes} {data.Año}</DivResp>}    
    </DivFecha>        
    </Div1>
  )
}

export default FechaNacimiento